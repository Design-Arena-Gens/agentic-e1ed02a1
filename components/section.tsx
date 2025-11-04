"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({
  id,
  title,
  eyebrow,
  description,
  className,
  children
}: SectionProps) => (
  <section id={id} className={clsx("relative mx-auto max-w-6xl px-6 py-16", className)}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      variants={variants}
      className="space-y-10"
    >
      {(title || description) && (
        <header className="space-y-4">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.3em] text-primary-300">{eyebrow}</p>
          )}
          {title && <h2 className="font-display text-3xl md:text-4xl">{title}</h2>}
          {description && <p className="max-w-3xl text-lg text-white/70">{description}</p>}
        </header>
      )}
      <div className="grid gap-6">{children}</div>
    </motion.div>
  </section>
);

export default Section;
