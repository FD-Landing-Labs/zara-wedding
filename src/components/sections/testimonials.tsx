"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: string;
  quote: string;
  avatar: string;
  date: string;
}

interface RatingCategory {
  label: string;
  value: string;
}

interface TestimonialsProps {
  data: {
    sectionLabel: string;
    sectionNumber: string;
    overallRating: string;
    headline: string;
    ratingCategories: RatingCategory[];
    cta: {
      label: string;
      href: string;
    };
    items: TestimonialItem[];
  };
}

function TestimonialCard({
  item,
  index,
}: {
  item: TestimonialItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="bg-white rounded-2xl p-5 md:p-6 border border-border"
    >
      {/* Header - Avatar, Name, Location, Rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <Image
            src={item.avatar}
            alt={item.name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover"
          />
          {/* Name & Location */}
          <div>
            <p className="font-semibold text-foreground text-lg">{item.name}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.location}</p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-foreground">
            {item.rating}
          </span>
          <Star className="w-3.5 h-3.5 fill-foreground text-foreground" />
        </div>
      </div>

      {/* Quote */}
      <p className="text-base tracking-tight font-medium text-foreground/80 leading-snug mb-4">
        {item.quote}
      </p>

      {/* Date */}
      <p className="text-xs text-muted-foreground">{item.date}</p>
    </motion.div>
  );
}

export function Testimonials({ data }: TestimonialsProps) {
  // Split headline by newline
  const headlineLines = data.headline.split("\n");

  // Split items into 3 columns for masonry effect
  const leftColumn = data.items.filter((_, i) => i % 3 === 0);
  const centerColumn = data.items.filter((_, i) => i % 3 === 1);
  const rightColumn = data.items.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-stone-50 overflow-hidden"
    >
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
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
            <p className="text-sm text-muted-foreground font-medium">{data.sectionLabel}</p>
          </div>

          {/* Overall Rating with decorative brackets */}
          <div className="flex items-center mb-5">
            <span className="text-6xl md:text-[clamp(3rem,8vw,5rem)] font-medium text-primary-950 tracking-tighter">
              {data.overallRating}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-tight max-w-md mb-10">
            {headlineLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          {/* Rating Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-6 md:gap-24">
            {data.ratingCategories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className={`text-center`}
              >
                <p className="text-4xl md:text-5xl font-medium text-primary-800 mb-1">
                  {category.value}
                </p>
                <p className="text-xs md:text-base text-muted-foreground font-medium ">
                  {category.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards - Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-2">
            {leftColumn.map((item, i) => (
              <TestimonialCard key={item.id} item={item} index={i * 3} />
            ))}
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4 md:gap-2 md:pt-6">
            {centerColumn.map((item, i) => (
              <TestimonialCard key={item.id} item={item} index={i * 3 + 1} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-2 md:pt-3">
            {rightColumn.map((item, i) => (
              <TestimonialCard key={item.id} item={item} index={i * 3 + 2} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={data.cta.href}
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              {data.cta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
