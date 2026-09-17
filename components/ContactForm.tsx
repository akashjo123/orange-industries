"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Upload, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = [
  "Branded environment",
  "Architectural fabrication",
  "Signage & wayfinding",
  "Display or activation",
  "Flags & outdoor branding",
  "Custom manufactured product",
  "Oil & Gas industrial fabrication",
  "Other specialized project"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Branded environment",
    date: "",
    location: "Bahrain",
    brief: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.company || !formData.email || !formData.brief) {
      setError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate fast frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#27272A] border border-zinc-700/60 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-line opacity-20 pointer-events-none" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 px-6 text-center space-y-6 max-w-lg mx-auto"
          >
            <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange text-brand-orange-text mx-auto flex items-center justify-center rounded-full">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-brand-orange-text uppercase tracking-widest block font-bold">
              ENQUIRY RECEIVED
            </span>

            <h3 className="text-3xl font-extrabold text-white">
              Project enquiry submitted successfully.
            </h3>

            <p className="text-sm text-zinc-300 font-mono leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our engineering and project estimation leads will review your brief and respond within one business day.
            </p>

            <div className="bg-[#3F3F46]/50 p-4 border border-zinc-700 text-xs font-mono text-zinc-300 space-y-1">
              <p>REFERENCE ID: <span className="text-brand-orange-text font-bold">OI-ENQ-{Math.floor(100000 + Math.random() * 900000)}</span></p>
              <p>DIRECT EMAIL: projects@orangeindustries.me</p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  projectType: "Branded environment",
                  date: "",
                  location: "Bahrain",
                  brief: "",
                });
                setFiles([]);
              }}
              className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Submit Another Project Brief</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange-text" />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
          >
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Your Name <span className="text-brand-orange-text">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al-Mansoor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Company / Organization <span className="text-brand-orange-text">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Work Email <span className="text-brand-orange-text">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+973 / +966..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white focus:outline-none focus:border-white font-sans"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#27272A] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Delivery Date */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                  Target Delivery Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white focus:outline-none focus:border-white font-sans"
                />
              </div>
            </div>

            {/* Project Brief */}
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                Project Brief & Requirements <span className="text-brand-orange-text">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what you need, site location, target quantity, materials or installation requirements..."
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                className="w-full bg-[#3F3F46]/40 border border-zinc-700 p-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-sans"
              />
            </div>

            {/* File Upload Box */}
            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-300 uppercase tracking-wider block font-semibold">
                Drawings / BOQ / Attachments (Optional)
              </label>
              <div className="border border-dashed border-zinc-700 p-6 text-center hover:border-white transition-colors relative bg-[#3F3F46]/30">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-6 h-6 text-brand-orange-text mx-auto mb-2" />
                <p className="text-xs font-mono text-zinc-300">
                  {files.length > 0
                    ? `${files.length} file(s) selected: ${files.map((f) => f.name).join(", ")}`
                    : "Click or drag drawings, BOQs, or PDF references here"}
                </p>
                <p className="text-[10px] font-mono text-zinc-400 mt-1">
                  Supported formats: PDF, DWG, DXF, PNG, JPG (up to 50MB)
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-white text-zinc-950 hover:bg-zinc-200 py-4 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md disabled:opacity-50"
            >
              <span>{isSubmitting ? "Processing Enquiry..." : "Submit Project Enquiry"}</span>
              <ArrowUpRight className="w-4 h-4 text-brand-orange-text" />
            </button>

            <p className="text-[11px] font-mono text-zinc-400 text-center">
              Project enquiries receive an initial technical assessment response within 24 hours.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
