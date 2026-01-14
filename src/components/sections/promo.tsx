"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PromoProps {
  data: {
    sectionLabel: string;
    sectionNumber: string;
    headline: string;
    image: string;
    cta: {
      label: string;
      href: string;
    };
  };
}

export function Promo({ data }: PromoProps) {
  // Split headline by newline for multi-line display
  const headlineLines = data.headline.split("\n");

  return (
    <section id="promo" className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl md:rounded-[2rem] min-h-[320px] md:min-h-[400px] lg:min-h-[450px]"
        >
          {/* Background Image */}
          <Image
            src={data.image}
            alt="Special offer background"
            fill
            className="object-cover"
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative h-full min-h-[320px] md:min-h-[400px] lg:min-h-[450px] flex flex-col items-center justify-center text-center px-6 py-12 md:py-16">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <p className="text-sm text-white/80 font-medium">{data.sectionLabel}</p>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[clamp(1.75rem,4vw,3.5rem)] font-medium text-white leading-[1.15] tracking-tighter capitalize max-w-3xl mb-8"
            >
              {headlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={data.cta.href}
                className="inline-flex items-center tracking-tight gap-0 bg-white rounded-full pl-1 pr-5 py-1 font-medium text-foreground hover:bg-white/95 transition-colors shadow-lg"
              >
                {/* Arrow circle */}
                <span className="w-10 h-10 rounded-full bg-foreground hover:bg-primary-600 flex items-center justify-center mr-3">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
                {data.cta.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
