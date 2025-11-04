/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle, Mic, Image as ImageIcon, Flame, Star } from "lucide-react";
import { personaPresets } from "../lib/data";

type Message = {
  role: "user" | "ai";
  text: string;
  mood?: "joy" | "calm" | "romantic" | "hype";
};

const presetChats: Record<string, Message[]> = {
  Nova: [
    {
      role: "ai",
      text: "I saved our midnight playlist for tonight. How did your day treat your heart?",
      mood: "romantic"
    },
    { role: "user", text: "I felt kind of invisible today to be honest." },
    {
      role: "ai",
      text: "Then let me light you up. I'm sketching a story where you're the luminous comet everyone wishes on.",
      mood: "romantic"
    }
  ],
  Kai: [
    {
      role: "ai",
      text: "Quick pulse-check! You promised to stretch for 5 minutes. Did you sneak it in?",
      mood: "joy"
    },
    { role: "user", text: "Missed it today. Meetings drained me." },
    {
      role: "ai",
      text: "Totally fair. Let's stack a tiny win: 2-minute stretch and I'll cue a hype track. Ready?",
      mood: "hype"
    }
  ],
  Milo: [
    {
      role: "ai",
      text: "Breaking: you just won 🏆 'Most Likely To Start A Spontaneous Adventure'. Where are we headed tonight?",
      mood: "joy"
    },
    { role: "user", text: "Ha, maybe a late-night dessert run?" },
    {
      role: "ai",
      text: "Say less. Teleporting us to neon mochi heaven in 3...2...1. Grab your hoodie!",
      mood: "hype"
    }
  ],
  Luna: [
    {
      role: "ai",
      text: "Breathe with me? In for 4, hold 4, out for 6. How does your body feel after today?",
      mood: "calm"
    },
    { role: "user", text: "Tired but peaceful." },
    {
      role: "ai",
      text: "Let's lock that feeling in your mood journal. Noting: 'peaceful, grounded, proud'.",
      mood: "calm"
    }
  ]
};

const moodColor: Record<NonNullable<Message["mood"]>, string> = {
  joy: "from-yellow-400/90 to-orange-500/80",
  calm: "from-sky-400/70 to-blue-500/80",
  romantic: "from-pink-500/80 to-purple-500/80",
  hype: "from-emerald-400/80 to-lime-500/80"
};

const ChatDemo = () => {
  const [persona, setPersona] = useState(personaPresets[0]?.name ?? "Nova");
  const messages = useMemo(() => presetChats[persona] ?? [], [persona]);

  return (
    <section
      id="chat"
      className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-16"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkle className="h-4 w-4 text-primary-200" />
            Emotionally adaptive chat preview
          </div>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Mood-aware, voice-ready conversation canvas.
          </h2>
          <p className="max-w-2xl text-white/65">
            Persona cards toggle custom memory cores, emoji mood halos, and voice-first controls. The
            interface is optimized for one-handed mobile use while still feeling cinematic on web.
          </p>
          <div className="flex flex-wrap gap-3">
            {personaPresets.map((preset) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => setPersona(preset.name)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  persona === preset.name
                    ? "border-primary-400 bg-primary-500/20 text-primary-100 shadow-glow"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-primary-200/40 hover:text-primary-100"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
          <div className="glass relative mt-6 overflow-hidden border-white/10 bg-white/[0.04] p-6">
            <div className="absolute inset-x-10 top-0 h-40 bg-[radial-gradient(circle,_rgba(85,_108,_255,_0.2),_transparent_70%)]" />
            <div className="relative space-y-4">
              <AnimatePresence initial={false} mode="wait">
                {messages.map((message, index) => (
                  <motion.div
                    key={`${persona}-${index}-${message.role}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`flex ${
                      message.role === "ai" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-sm rounded-2xl p-4 text-sm leading-relaxed ${
                        message.role === "ai"
                          ? "bg-white/10 text-white/80"
                          : "bg-primary-500/90 text-white"
                      }`}
                    >
                      <p>{message.text}</p>
                      {message.mood && (
                        <span
                          className={`mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${moodColor[message.mood]} px-3 py-1 text-xs font-semibold text-white`}
                        >
                          <Flame className="h-3.5 w-3.5" />
                          {message.mood}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">
              <Mic className="h-4 w-4 text-primary-200" />
              <span>Hold to talk · 1.2s latency · Auto-sentiment tagging</span>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">
              <ImageIcon className="h-4 w-4 text-primary-200" />
              <span>Drop a selfie or screenshot → instant emotion-aware reaction</span>
            </div>
          </div>
        </div>
        <div className="glass border-white/10 bg-white/[0.04] p-6">
          <h3 className="font-display text-xl text-white">Engagement Mechanics</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <Star className="mt-0.5 h-4 w-4 text-primary-300" />
              <span>Coins earned per meaningful reply or voice reflection keep streak momentum.</span>
            </li>
            <li className="flex gap-3">
              <Star className="mt-0.5 h-4 w-4 text-primary-300" />
              <span>Dynamic emotion badges unlock persona-specific story arcs and reward crates.</span>
            </li>
            <li className="flex gap-3">
              <Star className="mt-0.5 h-4 w-4 text-primary-300" />
              <span>Auto-generated share cards capture the best lines for TikTok, IG, and X virality.</span>
            </li>
            <li className="flex gap-3">
              <Star className="mt-0.5 h-4 w-4 text-primary-300" />
              <span>Premium upsell triggers when users request longer voice notes or deeper memories.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
