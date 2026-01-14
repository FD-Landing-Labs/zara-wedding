"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Flower2,
  Heart,
  Sparkles,
  Star,
  Award,
  Leaf,
  Crown,
  Gem,
  Palette,
} from "lucide-react";

interface MarqueeProps {
  data: {
    sectionLabel: string;
    headline: string;
    description: string;
  };
}

const marqueeItemsRow1 = [
  { text: "Stunning bouquets", icon: Flower2 },
  { text: "Elegant designs", icon: Crown },
  { text: "Fresh blooms", icon: Leaf },
  { text: "Premium quality", icon: Gem },
  { text: "Artisan crafted", icon: Palette },
  { text: "Stunning bouquets", icon: Flower2 },
  { text: "Elegant designs", icon: Crown },
  { text: "Fresh blooms", icon: Leaf },
  { text: "Premium quality", icon: Gem },
  { text: "Artisan crafted", icon: Palette },
];

const marqueeItemsRow2 = [
  { text: "Personalized service", icon: Heart },
  { text: "Timeless elegance", icon: Star },
  { text: "Beautiful arrangements", icon: Sparkles },
  { text: "Expert florists", icon: Award },
  { text: "Dream weddings", icon: Heart },
  { text: "Personalized service", icon: Heart },
  { text: "Timeless elegance", icon: Star },
  { text: "Beautiful arrangements", icon: Sparkles },
  { text: "Expert florists", icon: Award },
  { text: "Dream weddings", icon: Heart },
];

function MarqueeRow({
  items,
  reverse = false,
  duration = 30,
}: {
  items: typeof marqueeItemsRow1;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div className="flex overflow-hidden py-1">
      <motion.div
        className="flex gap-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2  flex-shrink-0 border border-border rounded-full"
          >
            {/* Icon in circle */}
            <div className="w-16 h-16 rounded-full border border-border bg-white flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-primary-600" />
            </div>
            {/* Text */}
            <span className="text-xl md:text-4xl tracking-tight font-medium text-primary-950 whitespace-nowrap mr-4">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee({ data }: MarqueeProps) {
  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      {/* Top Content - Centered */}
      <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-4 p-1.5 rounded-full border border-border bg-white shadow-sm mb-8"
          >
            {/* Avatar */}
            <div className="relative">
              <Image
                src="/assets/images/avatar/4.jpg"
                alt="Florist"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary-500 border-2 border-white rounded-full" />
            </div>

            {/* Name & Role */}
            <div className="text-left">
              <p className="font-semibold text-foreground text-lg tracking-tighter">Sarah Mitchell</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground ">Lead Florist</p>
            </div>

            {/* Phone Button */}
            <button className="w-14 h-14 rounded-full border border-border bg-stone-50 flex items-center justify-center hover:bg-stone-100 transition-colors ml-4">
              <Phone className="w-5 h-5 text-muted-foreground" />
            </button>
          </motion.div>

          {/* Quote/Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-2xl tracking-tight font-medium text-primary-800 max-w-2xl leading-snug"
          >
            "{data.description}"
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-2">
        <MarqueeRow items={marqueeItemsRow1} duration={35} />
        <MarqueeRow items={marqueeItemsRow2} reverse duration={40} />
      </div>
    </section>
  );
}
