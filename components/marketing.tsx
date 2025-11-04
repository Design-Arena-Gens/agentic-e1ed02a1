import { marketing } from "../lib/data";
import Section from "./section";

const Marketing = () => (
  <Section
    id="marketing"
    eyebrow="Growth Playbook"
    title="Viral & Retention Engine"
    description="Blend creator virality, addictive retention loops, and smart paid amplification."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {marketing.map((block) => (
        <article key={block.title} className="glass h-full border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-display text-xl text-white">{block.title}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

export default Marketing;
