import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight">05 — EDUCATION</h2>
        <div className="max-w-2xl flex-1">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">Cavite State University</h3>
            <p className="text-muted text-lg mb-4">Main Campus</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
              <p className="font-medium text-foreground">Bachelor of Science in Information Technology</p>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border"></div>
              <p className="font-medium text-foreground">2026</p>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-surface border border-border text-sm font-medium rounded-sm">GWA 1.49</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-sm tracking-wide">CUM LAUDE</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-wider font-semibold mb-6 border-b border-border pb-4 uppercase text-muted">Relevant Coursework</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-foreground font-medium">
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Application Development</li>
              <li>Information Management</li>
              <li>Systems Analysis & Design</li>
              <li>System Integration & Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}