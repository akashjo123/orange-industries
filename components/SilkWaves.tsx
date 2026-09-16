"use client";

import React, { useEffect, useRef } from "react";

interface SilkWavesProps {
  color?: string;
  speed?: number;
  scale?: number;
  className?: string;
  interactive?: boolean;
}

const VERTEX_SHADER_SOURCE = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec3 u_color;
  uniform float u_speed;
  uniform float u_scale;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p);
      p *= 2.02;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.x *= u_resolution.x / u_resolution.y;

    float dist = distance(st, mouse);
    float mouseLift = smoothstep(0.45, 0.0, dist) * 0.35;

    float time = u_time * u_speed;

    // Organic Domain Warping for Liquid Silk Folds
    vec2 q = vec2(0.0);
    q.x = fbm(st * u_scale + vec2(time * 0.06, time * 0.09));
    q.y = fbm(st * u_scale + vec2(time * 0.08, time * 0.05));

    vec2 r = vec2(0.0);
    r.x = fbm(st * u_scale + 1.2 * q + vec2(1.7, 9.2) + 0.15 * time + mouseLift);
    r.y = fbm(st * u_scale + 1.2 * q + vec2(8.3, 2.8) + 0.126 * time + mouseLift);

    float f = fbm(st * u_scale + r * 1.5);

    // Volumetric Surface Normal estimation
    float e = 0.008;
    float fx = (fbm(st * u_scale + r + vec2(e, 0.0)) - f) / e;
    float fy = (fbm(st * u_scale + r + vec2(0.0, e)) - f) / e;
    vec3 normal = normalize(vec3(-fx * 1.8, -fy * 1.8, 1.0));

    // Directional Lighting & Satin Sheen
    vec3 lightDir = normalize(vec3(0.6, 0.8, 0.9));
    float diff = max(0.0, dot(normal, lightDir));

    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(0.0, dot(normal, halfDir)), 24.0);

    // Ash Grey Background to Soft Warm Amber Silk Flow
    vec3 bgNav = vec3(0.095, 0.095, 0.105);
    vec3 silkColor = u_color * 0.65 + vec3(0.12, 0.12, 0.14);
    vec3 highlightColor = vec3(0.85, 0.55, 0.3);

    vec3 color = mix(bgNav, silkColor, clamp(f * f * 1.6, 0.0, 1.0));
    color = mix(color, highlightColor, clamp(length(q.x * q.y) * 1.4, 0.0, 1.0));

    color += vec3(diff * 0.18);
    color += vec3(spec * 0.35);

    float alpha = clamp(length(color - bgNav) * 1.5, 0.15, 0.95);

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function SilkWaves({
  color = "#FF5500",
  speed = 0.8,
  scale = 1.8,
  className = "",
  interactive = true,
}: SilkWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported for Silk Waves animation");
      return;
    }

    // Helper to compile shaders
    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader Compile Error:", glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program Link Error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry (full screen canvas)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const colorLoc = gl.getUniformLocation(program, "u_color");
    const speedLoc = gl.getUniformLocation(program, "u_speed");
    const scaleLoc = gl.getUniformLocation(program, "u_scale");

    // Convert hex color to rgb vec3
    const hexToRgb = (hex: string) => {
      let c = hex.replace("#", "");
      if (c.length === 3) c = c.split("").map((x) => x + x).join("");
      const num = parseInt(c, 16);
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255].map((v) => v / 255);
    };

    const rgbColor = hexToRgb(color);

    let animationFrameId: number;
    let startTime = performance.now();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const displayWidth = canvas.parentElement.clientWidth;
      const displayHeight = canvas.parentElement.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = canvas.height - (e.clientY - rect.top);
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const render = () => {
      const now = performance.now();
      const time = (now - startTime) * 0.001;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(mouseLoc, mouseRef.current.x, mouseRef.current.y);
      gl.uniform3f(colorLoc, rgbColor[0], rgbColor[1], rgbColor[2]);
      gl.uniform1f(speedLoc, speed);
      gl.uniform1f(scaleLoc, scale);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, speed, scale, interactive]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
