import React from "react";
import { skills } from "../data/skills";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <h2 className="text-3xl font-bold md:w-1/4 shrink-0 tracking-tight uppercase">04 — Tech Stack</h2>
        <div className="flex-1 w-full flex flex-col gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(skills.categories).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm tracking-wider font-semibold mb-6 border-b border-border pb-4 uppercase text-muted">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => {
                    const isFamiliar = skills.familiar.includes(item);
                    return (
                      <li 
                        key={item} 
                        className={`text-lg font-medium ${isFamiliar ? 'text-muted' : 'text-foreground'}`}
                      >
                        {item} {isFamiliar && <span className="text-xs ml-2 py-0.5 px-2 bg-surface rounded-sm border border-border tracking-wide font-normal">Familiar</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border pt-12">
            <h3 className="text-sm tracking-wider font-semibold mb-6 uppercase text-muted">Languages</h3>
            <div className="flex flex-wrap gap-8">
              <p className="text-lg"><strong className="font-medium text-foreground">English</strong> &nbsp;<span className="text-muted">Fluent</span></p>
              <p className="text-lg"><strong className="font-medium text-foreground">Filipino</strong> &nbsp;<span className="text-muted">Native</span></p>
              <p className="text-lg"><strong className="font-medium text-foreground">Nihonggo</strong> &nbsp;<span className="text-muted">Familiar</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}