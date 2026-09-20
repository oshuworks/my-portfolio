import React from "react";
import { projects } from "../data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight">02 — PROJECTS</h2>
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div key={proj.slug} className="flex flex-col p-8 border border-border bg-surface/30 rounded-sm hover:border-foreground/30 transition-colors group">
                {proj.featured && (
                  <span className="text-xs font-bold tracking-wider text-accent mb-4 uppercase">Featured Project</span>
                )}
                <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                <p className="text-muted mb-8 flex-1 leading-relaxed">{proj.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {proj.techStack.map((tech: string) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1.5 bg-background border border-border rounded-sm text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link href={`/projects/${proj.slug}`} className="inline-flex items-center gap-2 font-medium self-start mt-auto text-accent hover:text-accent/80 transition-colors">
                  View Case Study 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sm:mt-12 flex justify-center sm:justify-start">
            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-sm bg-foreground text-background px-8 font-medium transition-colors hover:bg-foreground/90 whitespace-nowrap">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}