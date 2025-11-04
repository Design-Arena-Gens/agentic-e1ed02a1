import Hero from "../components/hero";
import TargetAudience from "../components/target-audience";
import Personas from "../components/personas";
import ChatDemo from "../components/chat-demo";
import Features from "../components/features";
import Monetization from "../components/monetization";
import TechStack from "../components/tech-stack";
import UserFlows from "../components/user-flows";
import Roadmap from "../components/roadmap";
import Marketing from "../components/marketing";
import Publishing from "../components/publishing";
import Footer from "../components/footer";
import { productName } from "../lib/data";
import Link from "next/link";

const navLinks = [
  { hash: "concept", label: "Audience" },
  { hash: "personas", label: "Personas" },
  { hash: "features", label: "Features" },
  { hash: "stack", label: "Stack" },
  { hash: "roadmap", label: "Roadmap" },
  { hash: "marketing", label: "Growth" }
] as const;

const Page = () => (
  <main className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(22,28,45,0.9),_rgba(4,7,18,1))] text-white">
    <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(85,108,255,0.35),_transparent_70%)] blur-3xl" />
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl text-primary-200">
          {productName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.hash}
              href={{ pathname: "/", hash: item.hash }}
              className="hover:text-primary-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={{ pathname: "/", hash: "monetization" }}
          className="rounded-full border border-primary-500 bg-primary-500/20 px-4 py-2 text-sm text-primary-100 transition hover:bg-primary-500 hover:text-white"
        >
          Monetization Plan
        </Link>
      </div>
    </header>
    <Hero />
    <TargetAudience />
    <Personas />
    <ChatDemo />
    <Features />
    <Monetization />
    <TechStack />
    <UserFlows />
    <Roadmap />
    <Marketing />
    <Publishing />
    <Footer />
  </main>
);

export default Page;
