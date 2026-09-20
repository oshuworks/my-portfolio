import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "../../../components/icons";

export default function ERPProjectCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-background min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">ERP PROJECT MANAGEMENT</h1>
          <h2 className="text-2xl text-muted font-medium mb-8">Web-Based ERP System</h2>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://github.com/oshuworks" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-background px-6 font-medium transition-colors hover:bg-surface gap-2">
              GitHub <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <article className="flex flex-col gap-12 text-lg">
          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Overview</h3>
            <p className="text-muted leading-relaxed mb-4">
              A comprehensive ERP (Enterprise Resource Planning) project management system designed to streamline internal project operations, 
              track progress, manage resources efficiently, and systematize complex workflows.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Project Objectives</h3>
            <ul className="list-disc pl-6 text-muted mb-4 space-y-2">
              <li>Streamline project operations and internal workflows.</li>
              <li>Implement precise project tracking mechanisms.</li>
              <li>Enable efficient resource management for varied teams.</li>
              <li>Improve overall planning and execution of long-term projects.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Key Features</h3>
            <ul className="list-disc pl-6 text-muted mb-4 space-y-2">
              <li><strong className="text-foreground">Project Tracking:</strong> Real-time overview of tasks and milestones.</li>
              <li><strong className="text-foreground">Resource Management:</strong> Allocating personnel and assets dynamically.</li>
              <li><strong className="text-foreground">Workflow Optimization:</strong> Streamlining repetitive project management operations.</li>
              <li><strong className="text-foreground">ERP Integration:</strong> Centralizing planning functionality in one web-based interface.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["PHP", "JavaScript", "MySQL", "HTML/CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-surface border border-border rounded-sm text-sm font-medium text-foreground">{tech}</span>
              ))}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">The Solution</h3>
            <p className="text-muted leading-relaxed mb-4">
              By developing this centralized web-based system, planning and execution overhead was significantly reduced. 
              Teams can now manage tasks, document progress, and allocate resources all within a responsive, accessible platform, 
              enhancing overall project success rates.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}