import { targetAudience } from "../lib/data";
import Section from "./section";

const TargetAudience = () => (
  <Section
    id="concept"
    eyebrow="Target Audience"
    title="Who PulseMinds Captivates"
    description="PulseMinds centers on emotionally resonant AI conversations that feel intimate, productive, and always fresh."
  >
    <div className="grid gap-5 md:grid-cols-3">
      {targetAudience.map((audience) => (
        <article key={audience.segment} className="glass h-full p-6">
          <h3 className="font-display text-xl text-white">{audience.segment}</h3>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-200">
            Pain Point
          </p>
          <p className="mt-1 text-sm text-white/70">{audience.pain}</p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-200">
            PulseMinds Solution
          </p>
          <p className="mt-1 text-sm text-white/70">{audience.solution}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default TargetAudience;
