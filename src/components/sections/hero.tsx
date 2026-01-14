"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "./navbar";

interface HeroProps {
  data: {
    headline: {
      line1: string;
      line2: string;
      line3: string;
    };
    description: string;
    image: string;
    cta: {
      primary: {
        label: string;
        href: string;
      };
    };
    stats: {
      weddings: string;
      weddingsLabel: string;
      rating: string;
      ratingLabel: string;
    };
  };
  navbar: {
    brandName: string;
    menuLinks: Array<{
      name: string;
      number: string;
      href: string;
    }>;
    cta: {
      label: string;
      href: string;
    };
    contact: {
      phone: string;
    };
    featured: {
      image: string;
    };
  };
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Hero({ data, navbar }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-white"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Side */}
        <div className="relative w-full lg:w-[45%] px-6 md:px-12 lg:px-16 py-8 flex flex-col">
          {/* Navbar */}
          <Navbar data={navbar} />

          {/* Hero Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-center justify-center py-12 lg:py-0"
          >
            {/* Location/Tagline Badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/80 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Wedding Floral Design Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[clamp(2.5rem,5vw,4rem)] text-center font-medium tracking-tight leading-[1] text-foreground mb-6"
            >
              {data.headline.line1}
              <br />
              <span className="text-primary-800">{data.headline.line2}</span>
              <br />
              {data.headline.line3}
            </motion.h1>

            {/* Social Proof */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-8"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={`/assets/images/avatar/${i}.jpg`}
                      alt={`Client ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Loved by <span className="text-foreground font-medium">500+</span> happy couples
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={item}>
              <Button
                asChild
                size="lg"
                className="h-14 px-4 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 text-base font-medium"
              >
                <Link href={data.cta.primary.href}>
                  <span className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center -ml-2">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  {data.cta.primary.label}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border border-border bg-white/80 backdrop-blur-sm">
              {/* Client Favorite Badge */}
              <div className="flex justify-center items-center gap-2">
                <span className="text-primary-500 text-base md:text-lg">🌿</span>
                <div className="text-center">
                  <p className="text-xs md:text-sm font-medium text-foreground">Client</p>
                  <p className="text-xs md:text-sm font-medium text-foreground">favorite</p>
                </div>
                <span className="text-primary-500 text-base md:text-lg">🌿</span>
              </div>

              {/* Weddings Stat */}
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-foreground">{data.stats.weddings}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">{data.stats.weddingsLabel}</p>
              </div>

              {/* Rating Stat */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <p className="text-xl md:text-2xl font-bold text-foreground">{data.stats.rating}</p>
                </div>
                <div className="flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 md:w-3 md:h-3 fill-primary-500 text-primary-500"
                    />
                  ))}
                </div>
              </div>

              {/* Years Stat */}
              <div className="text-center ">
                <p className="text-xl md:text-2xl font-bold text-foreground">10+</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Years</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen p-4 lg:p-6"
        >
          <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden">
            <Image
              src={data.image}
              alt="Wedding floral arrangement"
              fill
              className="object-cover"
              priority
            />


          </div>
        </motion.div>
      </div>
    </section>
  );
}
