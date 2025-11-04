import { personaPresets } from "../lib/data";
import Section from "./section";

const Personas = () => (
  <Section
    id="personas"
    eyebrow="Persona System"
    title="Launch Personas That Drive Emotion"
    description="Each AI companion is tuned to spark specific emotional beats, with clear upgrade pathways."
  >
    <div className="grid gap-6 md:grid-cols-4">
      {personaPresets.map((persona) => (
        <article key={persona.name} className="glass h-full border-white/10 bg-white/[0.04] p-5">
          <h3 className="font-display text-xl text-white">{persona.name}</h3>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-200">{persona.role}</p>
          <p className="mt-3 inline-flex rounded-full bg-primary-500/10 px-3 py-1 text-xs text-primary-200">
            {persona.mood}
          </p>
          <p className="mt-4 text-sm text-white/70">{persona.hook}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Personas;
