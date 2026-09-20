"use client";
import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { motion } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-[100svh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 pt-20 max-w-7xl mx-auto">
      <motion.div 
        className="max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-muted text-lg sm:text-xl mb-4">Hello, I&apos;m</motion.p>
        <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          JOSHUA TAGLE
        </motion.h1>
        <motion.h2 variants={item} className="text-2xl sm:text-3xl text-muted font-medium mb-8">
          BSIT Graduate · Web Developer
        </motion.h2>
        <motion.p variants={item} className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10">
          I build responsive web applications and practical technology solutions with a focus on usability and reliable systems.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href="/#projects" 
            className="inline-flex h-14 items-center justify-center rounded-sm bg-foreground text-background px-8 font-medium transition-colors hover:bg-foreground/90 whitespace-nowrap"
          >
            View Projects
          </Link>
          <a 
            href="/Joshua-Tagle-Resume.pdf" 
            download
            className="inline-flex h-14 items-center justify-center rounded-sm border border-border bg-background px-8 font-medium transition-colors hover:bg-surface whitespace-nowrap"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-6">
          <a href="https://github.com/oshuworks" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground flex items-center gap-2 transition-colors">
            <GithubIcon size={20} />
            <span className="font-medium text-sm">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/joshua-tagle" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground flex items-center gap-2 transition-colors">
            <LinkedinIcon size={20} />
            <span className="font-medium text-sm">LinkedIn</span>
          </a>
          <a href="mailto:taglejoshua1212@gmail.com" className="text-muted hover:text-foreground flex items-center gap-2 transition-colors">
            <Mail size={20} />
            <span className="font-medium text-sm">Email</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}