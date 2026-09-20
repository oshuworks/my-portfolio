import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight">01 — ABOUT</h2>
        <div className="text-lg text-muted max-w-2xl flex flex-col gap-6">
          <p>
            I&apos;m Joshua Tagle, a Bachelor of Science in Information Technology graduate from Cavite State University – Main Campus.
          </p>
          <p>
            My experience covers web development, IT infrastructure, system administration, database management, networking, and technical support.
          </p>
          <p>
            I enjoy building practical web applications and technology solutions that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}