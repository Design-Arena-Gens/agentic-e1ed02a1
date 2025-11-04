import { publishingSteps } from "../lib/data";
import Section from "./section";
import { Smartphone } from "lucide-react";

const Publishing = () => (
  <Section
    id="publishing"
    eyebrow="Go-To-Market"
    title="Play Store Launch Checklist"
    description="Transform the web app into a PWA-backed Android presence for rapid distribution."
  >
    <div className="glass border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center gap-3">
        <Smartphone className="h-6 w-6 text-primary-300" />
        <h3 className="font-display text-xl text-white">Android / PWA Path</h3>
      </div>
      <ol className="mt-4 space-y-3 text-sm text-white/75">
        {publishingSteps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-400 text-primary-200">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default Publishing;
