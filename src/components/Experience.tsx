import React from "react";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight">03 — EXPERIENCE</h2>
        <div className="max-w-2xl flex-1">
          {experience.map((job, idx) => (
            <div key={idx} className="mb-12 last:mb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold flex-1">{job.role}</h3>
                <span className="text-xl font-bold text-muted hidden sm:block">{job.year}</span>
              </div>
              <p className="text-lg text-foreground font-medium mb-1">{job.company}</p>
              <p className="text-muted mb-8">{job.location} · {job.date}</p>
              
              <ul className="flex flex-col gap-6">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-6 items-start">
                    <span className="text-muted/40 font-mono text-sm leading-7 shrink-0 inline-block w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-foreground lg:text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}