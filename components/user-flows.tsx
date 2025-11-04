import { userFlows } from "../lib/data";
import Section from "./section";

const UserFlows = () => (
  <Section
    id="flows"
    eyebrow="User Journeys"
    title="Habit-Forming Loops"
    description="Every journey is engineered to capture an emotional moment, reinforce streaks, and tee up premium upgrades."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {userFlows.map((flow) => (
        <article key={flow.title} className="glass h-full border-white/10 bg-white/[0.04] p-6">
          <h3 className="font-display text-xl text-white">{flow.title}</h3>
          <ol className="mt-4 space-y-3 text-sm text-white/70">
            {flow.steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="font-semibold text-primary-300">{`0${index + 1}`}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  </Section>
);

export default UserFlows;
