"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  data: {
    brand: {
      name: string;
      tagline: string;
    };
    headline: string;
    cta: {
      label: string;
      href: string;
    };
    contact: {
      email: string;
      phone: string;
    };
    bannerImage: string;
    linkGroups: LinkGroup[];
    bottomLinks: FooterLink[];
    copyright: string;
  };
}

export function Footer({ data }: FooterProps) {
  // Split headline by newline
  const headlineLines = data.headline.split("\n");

  return (
    <footer id="footer" className="bg-primary-950 text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          {/* Left Column - Brand & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Tagline */}
            <p className="text-sm text-white/60 mb-4">{data.brand.tagline}</p>

            {/* Headline */}
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight mb-8">
              {headlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={data.cta.href}
                className="inline-flex items-center gap-0 bg-white text-foreground rounded-full pl-1 pr-5 py-1 font-medium hover:bg-white/95 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center mr-3">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
                {data.cta.label}
              </Link>
            </motion.div>
          </motion.div>

          {/* Center Column - Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {data.linkGroups[0] && (
              <>
                <p className="text-sm text-white/60 mb-4">
                  {data.linkGroups[0].title}
                </p>
                <ul className="space-y-3">
                  {data.linkGroups[0].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          {/* Right Column - Explore & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-4"
          >
            {/* Explore Links */}
            {data.linkGroups[1] && (
              <div className="mb-8">
                <p className="text-sm text-white/60 mb-4">
                  {data.linkGroups[1].title}
                </p>
                <ul className="space-y-2">
                  {data.linkGroups[1].links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact */}
            <div>
              <p className="text-sm text-white/60 mb-4">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
                    className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                  >
                    {data.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Copyright & Links */}
        <div className="flex items-center justify-between py-4 border-t border-white/10">
          <p className="text-sm text-white/50">
            © {data.brand.name}, {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            {data.bottomLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/50 hover:text-white/70 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Large Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-4 mx-4 md:mx-6 lg:mx-8 mb-4 md:mb-6 lg:mb-8"
      >
        {/* Banner Image Container */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={data.bannerImage}
            alt="Footer banner"
            fill
            className="object-cover"
          />

          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Large Brand Name */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-[clamp(4rem,15vw,12rem)] font-medium text-white tracking-tighter leading-none">
              {data.brand.name}
            </h2>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
