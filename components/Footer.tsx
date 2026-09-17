import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Globe } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0D0E10] text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-grid-line opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo className="h-9" lightMode={false} />
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Integrated GCC engineering, architectural fabrication, branded environments, landmark signage, and custom project manufacturing. One accountable delivery partner from brief to installation.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-brand-orange-text" />
                Bahrain Base
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange-text" />
                Saudi Project Delivery
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-orange-text uppercase tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blogs & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-orange-text uppercase tracking-widest font-bold">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link href="/services#decorative-environments" className="hover:text-white transition-colors">Decorative Environments</Link></li>
              <li><Link href="/services#architectural-fabrication" className="hover:text-white transition-colors">Architectural Fabrication</Link></li>
              <li><Link href="/services#signage-wayfinding" className="hover:text-white transition-colors">Signage & Wayfinding</Link></li>
              <li><Link href="/services#display-activation" className="hover:text-white transition-colors">Display & Activation</Link></li>
              <li><Link href="/services#flags-outdoor-branding" className="hover:text-white transition-colors">Flags & Outdoor Branding</Link></li>
              <li><Link href="/services#custom-manufactured-products" className="hover:text-white transition-colors">Custom Products</Link></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-brand-orange-text uppercase tracking-widest font-bold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href="mailto:projects@orangeindustries.me" 
                className="flex items-center gap-2 text-white hover:text-brand-orange-text transition-colors group font-mono"
              >
                <Mail className="w-4 h-4 text-brand-orange-text" />
                <span>projects@orangeindustries.me</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://orangeindustries.me" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span>orangeindustries.me</span>
              </a>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-orange text-black hover:bg-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  <span>Project Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Orange Industries W.L.L. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>BAHRAIN MANUFACTURING HUB</span>
            <span>·</span>
            <span>SAUDI ARABIA DELIVERY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
