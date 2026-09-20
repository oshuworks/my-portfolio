"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Stack", href: "/#stack" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight">
          Joshua Tagle
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border overflow-hidden shadow-sm"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-muted hover:text-foreground active:text-foreground py-2 border-b border-border last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}