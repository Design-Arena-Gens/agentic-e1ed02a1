import { roadmap } from "../lib/data";
import Section from "./section";

const Roadmap = () => (
  <Section
    id="roadmap"
    eyebrow="Roadmap"
    title="From MVP to Global Scale"
    description="Sequence execution into crisp sprints with monetization gates shipping early."
  >
    <div className="glass border-white/10 bg-white/[0.04] p-6">
      <div className="grid gap-6 md:grid-cols-3">
        {roadmap.map((phase) => (
          <article key={phase.phase} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="font-display text-xl text-primary-200">{phase.phase}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {phase.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </Section>
);

export default Roadmap;
