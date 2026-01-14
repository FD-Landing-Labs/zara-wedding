"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  data: {
    sectionLabel: string;
    sectionNumber: string;
    headline: string;
    description: string;
    items: ServiceItem[];
  };
}

export function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          {/* Left - Section Label & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-xl"
          >
            {/* Section Label */}
            <p className="text-sm text-muted-foreground mb-4">
              {data.sectionLabel}
            </p>

            {/* Headline */}
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-tighter leading-[1] text-primary-900">
              {data.headline}
            </h2>
          </motion.div>

          {/* Right - Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:max-w-md"
          >
            {/* Description */}
            <p className="text-muted-foreground tracking-tight leading-relaxed mb-6">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#footer"
                className="inline-flex items-center gap-1 text-primary-700 font-medium hover:text-primary-800 transition-colors group"
              >
                Call For Booking
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="relative">
          {/* Scrollable container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16 scrollbar-hide">
            {data.items.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 group"
              >
                <Link href="#services" className="block">
                  <div
                    className={`relative overflow-hidden rounded-2xl md:rounded-3xl h-64 md:h-80 lg:h-96 group-hover:shadow-lg transition-shadow`}
                  >
                    {/* Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between">
                      {/* Title */}
                      <h3 className="text-white font-medium text-lg md:text-xl leading-tight tracking-tighter max-w-[70%]">
                        {service.title}
                      </h3>

                      {/* Arrow Button */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${index === 0
                          ? "bg-primary-400 hover:bg-primary-500"
                          : "bg-foreground/80 hover:bg-foreground"
                          }`}
                      >
                        <ArrowUpRight
                          className={`w-5 h-5 ${index === 0 ? "text-foreground" : "text-background"
                            }`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
