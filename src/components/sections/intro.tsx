"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smile, Award, Sparkles } from "lucide-react";

interface IntroProps {
  data: {
    sectionLabel: string;
    sectionNumber: string;
    headline: string;
    description: string;
    image: string;
    highlights: string[];
  };
}

const stats = [
  {
    value: "500+",
    label: "Happy couples celebrated",
    icon: Smile,
  },
  {
    value: "10+",
    label: "Years of floral excellence",
    icon: Award,
  },
  {
    value: "100%",
    label: "Satisfaction guaranteed",
    icon: Sparkles,
  },
];

export function Intro({ data }: IntroProps) {
  return (
    <section id="intro" className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt="Floral arrangement showcase"
          fill
          className="object-cover object-bottom"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full min-h-[600px] md:min-h-[700px] flex flex-col justify-between p-6 md:p-12 lg:p-16">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-white/70 text-sm md:text-base mb-4"
          >
            Introduction
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-medium text-white leading-[1.1] tracking-tight"
          >
            {data.headline}
          </motion.h2>
        </motion.div>

        {/* Stats Card - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="self-end w-full max-w-md"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl px-4 shadow-xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className={`flex items-center justify-between gap-4 py-4 ${index !== stats.length - 1 ? "border-b border-border" : ""
                  }`}
              >
                {/* Value */}
                <p className="text-3xl md:text-4xl font-semibold text-foreground min-w-[100px] text-primary-700 tracking-tighter">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="flex-1 text-sm md:text-base text-muted-foreground leading-tight">
                  {stat.label}
                </p>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
