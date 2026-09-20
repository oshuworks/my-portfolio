import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-background min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">PROJECTS</h1>
        <p className="text-xl text-muted mb-16">Selected work and academic projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={proj.slug} className="flex flex-col p-8 border border-border bg-surface/30 rounded-sm hover:border-foreground/30 transition-colors group">
              <span className="text-xl font-mono text-muted mb-6">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
              <p className="text-foreground font-medium mb-4">{proj.fullTitle}</p>
              <p className="text-muted mb-8 flex-1 leading-relaxed">{proj.shortDescription}</p>
              
              <Link href={`/projects/${proj.slug}`} className="inline-flex items-center gap-2 font-medium self-start mt-auto text-accent hover:text-accent/80 transition-colors">
                View Case Study 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}