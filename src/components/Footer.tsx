import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Joshua Tagle. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, and Motion.</p>
      </div>
    </footer>
  );
}