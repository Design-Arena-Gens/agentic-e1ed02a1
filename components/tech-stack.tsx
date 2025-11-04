import { techStack } from "../lib/data";
import Section from "./section";

const TechStack = () => (
  <Section
    id="stack"
    eyebrow="Tech Stack"
    title="Scalable Low-Latency Architecture"
    description="Edge-first architecture keeps inference snappy, while modular AI providers unlock differentiated experiences per persona."
  >
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(techStack).map(([domain, items]) => (
        <article key={domain} className="glass h-full border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-display text-lg capitalize text-white">{domain}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

export default TechStack;
