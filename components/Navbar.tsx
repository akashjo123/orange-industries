"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass-nav-dark border-b border-zinc-800/80 shadow-lg"
            : "py-6 bg-gradient-to-b from-[#141416]/95 via-[#141416]/70 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="group">
            <Logo className="h-8 sm:h-9" lightMode={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 bg-[#222226]/90 px-7 py-2.5 border border-zinc-700/80 rounded-full backdrop-blur-md shadow-md">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-mono tracking-widest uppercase transition-colors duration-200 py-1 ${
                    isActive ? "text-brand-orange-text font-bold" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button - Bright Brand Orange CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-white hover:text-zinc-950 text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-brand-orange-text transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange-text" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#18181B] flex flex-col justify-between p-6 pt-24 md:hidden border-b border-zinc-700/60"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-line opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5 my-auto">
              <span className="font-mono text-xs text-brand-orange-text uppercase tracking-widest">
                Navigation Directory
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-bold text-white hover:text-brand-orange-text transition-colors py-2.5 border-b border-slate-800/80"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 space-y-4 pt-6 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400">
                <p>Bahrain Manufacturing Hub</p>
                <p className="text-brand-orange-text font-bold">projects@orangeindustries.me</p>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-black py-3.5 text-xs font-mono font-bold uppercase tracking-wider"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
