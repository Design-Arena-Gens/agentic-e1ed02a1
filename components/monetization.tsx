import { monetization } from "../lib/data";
import Section from "./section";
import { Coins } from "lucide-react";

const Monetization = () => (
  <Section
    id="monetization"
    eyebrow="Revenue Design"
    title="Lean Monetization Stack"
    description="Blend subscriptions, rewarded ads, and creator-driven persona commerce to keep LTV high while CAC stays lean."
  >
    <div className="glass border-primary-500/20 bg-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <Coins className="h-6 w-6 text-primary-200" />
        <h3 className="font-display text-xl">Monetization Loops</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm text-white/75">
        {monetization.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Monetization;
