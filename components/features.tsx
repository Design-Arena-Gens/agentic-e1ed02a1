import { CheckCircle2, Crown } from "lucide-react";
import Section from "./section";
import { freeFeatures, premiumFeatures } from "../lib/data";

const Features = () => (
  <Section
    id="features"
    eyebrow="Feature Stack"
    title="Core Experience: Free vs Premium"
    description="Design the free tier for habit formation, then let premium features supercharge intimacy, customization, and velocity."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <article className="glass h-full border-primary-500/30 bg-primary-500/10 p-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-primary-200" />
          <h3 className="font-display text-2xl">Free Tier Highlights</h3>
        </div>
        <ul className="mt-5 space-y-3 text-sm text-white/75">
          {freeFeatures.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1 h-1.5 min-w-[1.5rem] rounded-full bg-primary-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="glass h-full border-white/15 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <Crown className="h-6 w-6 text-accent" />
          <h3 className="font-display text-2xl">Premium Power-Ups</h3>
        </div>
        <ul className="mt-5 space-y-3 text-sm text-white/75">
          {premiumFeatures.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1 h-1.5 min-w-[1.5rem] rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </Section>
);

export default Features;
