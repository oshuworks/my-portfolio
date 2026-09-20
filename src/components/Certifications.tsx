import React from "react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight uppercase">06 — Certifications & Training</h2>
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="p-8 border border-border bg-surface/30 rounded-sm hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-bold mb-2 uppercase leading-snug">{cert.title}</h3>
              <p className="text-sm font-medium text-muted mb-4">{cert.date}</p>
              <p className="text-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}