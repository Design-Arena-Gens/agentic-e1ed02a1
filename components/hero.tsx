"use client";

import Link from "next/link";
import { Sparkles, Bot, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { appSummary, brandPillars, productName, tagLine } from "../lib/data";

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(85,_108,_255,_0.4),_transparent_60%)]" />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
      >
        <Sparkles className="h-4 w-4 text-primary-200" />
        Viral AI Companion Blueprint
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
      >
        {productName}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-lg text-white/75 sm:text-xl"
      >
        {tagLine}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-base text-white/60"
      >
        {appSummary}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex flex-wrap justify-center gap-4"
      >
        <Link
          href={{ pathname: "/", hash: "concept" }}
          className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-white shadow-glow transition hover:bg-primary-400"
        >
          <Bot className="h-5 w-5" />
          Explore Blueprint
        </Link>
        <Link
          href={{ pathname: "/", hash: "chat" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-primary-300/60 hover:text-primary-200"
        >
          <Rocket className="h-5 w-5" />
          See Product Vision
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
        className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg backdrop-blur-xl sm:grid-cols-3"
      >
        {brandPillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
            <h3 className="font-display text-lg text-white">{pillar.title}</h3>
            <p className="mt-2 text-sm text-white/65">{pillar.body}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
