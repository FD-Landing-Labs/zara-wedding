"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

interface WorkItem {
  id: string;
  number: string;
  title: string;
  image: string;
}

interface WorksProps {
  data: {
    sectionLabel: string;
    sectionNumber: string;
    headline: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
    items: WorkItem[];
  };
}

// Define height classes for masonry effect
const getItemHeight = (index: number): string => {
  const heights: Record<number, string> = {
    0: "h-[280px] md:h-[320px]", // Left col - 1
    1: "h-[320px] md:h-[380px]", // Left col - 2
    2: "h-[260px] md:h-[300px]", // Left col - 3
    3: "h-[380px] md:h-[440px]", // Center col - 4 (tallest)
    4: "h-[340px] md:h-[400px]", // Center col - 5
    5: "h-[300px] md:h-[340px]", // Center col - 6
    6: "h-[300px] md:h-[340px]", // Right col - 7
    7: "h-[260px] md:h-[300px]", // Right col - 8
    8: "h-[320px] md:h-[380px]", // Right col - 9
  };
  return heights[index] || "h-[300px] md:h-[350px]";
};

export function Works({ data }: WorksProps) {
  // Split items into columns for masonry layout
  const leftColumn = data.items.filter((_, i) => i % 3 === 0);
  const centerColumn = data.items.filter((_, i) => i % 3 === 1);
  const rightColumn = data.items.filter((_, i) => i % 3 === 2);

  const renderCard = (item: WorkItem, originalIndex: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: originalIndex * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link href="#works" className="block">
        <div
          className={`relative overflow-hidden rounded-2xl md:rounded-3xl ${getItemHeight(
            originalIndex
          )}`}
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 object-bottom"
          />

          {/* Subtle dark overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            {/* Number */}
            <p className="text-white/70 text-xs md:text-base font-medium mb-1">
              {item.number}
            </p>
            {/* Title */}
            <h3 className="text-white font-medium text-base md:text-2xl tracking-tighter leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section id="works" className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <p className="text-sm text-muted-foreground">{data.sectionLabel}</p>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-tighter leading-[1.1] text-primary-900 max-w-2xl mb-8">
            {data.headline}
          </h2>
          <motion.div>
            <Button
              asChild
              size="lg"
              className="h-14 px-4 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 text-base font-medium"
            >
              <Link href={data.cta.href}>
                <span className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center -ml-2">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                {data.cta.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-2 md:pt-8">
            {leftColumn.map((item, i) => renderCard(item, i * 3))}
          </div>

          {/* Center Column - starts higher */}
          <div className="flex flex-col gap-4 md:gap-2">
            {centerColumn.map((item, i) => renderCard(item, i * 3 + 1))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-2 md:pt-4">
            {rightColumn.map((item, i) => renderCard(item, i * 3 + 2))}
          </div>
        </div>
      </div>
    </section>
  );
}
