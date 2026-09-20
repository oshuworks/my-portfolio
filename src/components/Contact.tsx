import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">LET&apos;S CONNECT</h2>
      <p className="text-lg text-muted max-w-xl mx-auto mb-12 leading-relaxed">
        Interested in working together, discussing a project, or connecting?
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
        <a href="mailto:taglejoshua1212@gmail.com" className="inline-flex h-14 items-center justify-center rounded-sm bg-foreground text-background px-8 font-medium transition-colors hover:bg-foreground/90 whitespace-nowrap">
          Email Me
        </a>
        <a href="/Joshua-Tagle-Resume.pdf" download className="inline-flex h-14 items-center justify-center rounded-sm border border-border bg-background px-8 font-medium transition-colors hover:bg-surface whitespace-nowrap">
           Download Resume
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        <a href="mailto:taglejoshua1212@gmail.com" className="text-muted hover:text-foreground transition-colors font-medium text-sm flex items-center gap-2">
          <Mail size={18} /> taglejoshua1212@gmail.com
        </a>
        <a href="https://github.com/oshuworks" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors font-medium text-sm flex items-center gap-2">
          <GithubIcon size={18} /> GitHub
        </a>
        <a href="https://linkedin.com/in/joshua-tagle" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors font-medium text-sm flex items-center gap-2">
          <LinkedinIcon size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
}