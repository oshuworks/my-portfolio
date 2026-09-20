import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../../../components/icons";

export default function BriteCenterCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-background min-h-screen pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">BRITE CENTER</h1>
          <h2 className="text-2xl text-muted font-medium mb-8">Web-Based Platform for BRITE Center Products</h2>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://cvsubritecenter.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm bg-foreground text-background px-6 font-medium transition-colors hover:bg-foreground/90 gap-2">
              Live Website <ExternalLink size={16} />
            </a>
            <a href="https://github.com/oshuworks" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-sm border border-border bg-background px-6 font-medium transition-colors hover:bg-surface gap-2">
              GitHub <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <article className="flex flex-col gap-12 text-lg">
          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Overview</h3>
            <p className="text-muted leading-relaxed mb-4">
              The BRITE Center platform is a full-stack e-commerce solution designed specifically for showcasing and managing products 
              for the BRITE Center. It supports complete user transactions, product management, and a robust backend administration system.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">The Problem</h3>
            <p className="text-muted leading-relaxed mb-4">
              The center needed a dedicated way to improve its online product visibility and management. They lacked an integrated responsive platform 
              for product presentation, transaction handling, and centralized administration, leading to inefficiencies in managing orders.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Project Objectives</h3>
            <ul className="list-disc pl-6 text-muted mb-4 space-y-2">
              <li>Develop a secure, mobile-friendly e-commerce platform.</li>
              <li>Implement user authentication and profile management.</li>
              <li>Build a comprehensive admin dashboard for product and order management.</li>
              <li>Ensure responsive design across all devices.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Key Features</h3>
            <ul className="list-disc pl-6 text-muted mb-4 space-y-2">
              <li><strong className="text-foreground">E-Commerce Workflows:</strong> Online transactions and shopping cart implementations.</li>
              <li><strong className="text-foreground">User Management:</strong> User registration, secure login, and profile tracking.</li>
              <li><strong className="text-foreground">Admin System:</strong> Secure database-backed admin management system for updating catalogs.</li>
              <li><strong className="text-foreground">Responsive Interfaces:</strong> Mobile-friendly layouts for all user roles.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-surface border border-border rounded-sm text-sm font-medium text-foreground">{tech}</span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4 text-foreground">What I Learned</h3>
            <p className="text-muted leading-relaxed mb-4">
              Building the BRITE Center platform solidified my understanding of end-to-end full-stack development, especially integrating Next.js 
              with a relational database like MySQL. It also sharpened my skills in UI/UX through Tailwind CSS, ensuring smooth animations and highly responsive layouts.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}