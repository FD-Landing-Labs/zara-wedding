"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Flower2, Phone, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  data: {
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

const menuItems = [
  { title: "About", subtitle: "Explore our story", href: "#intro" },
  { title: "Services", subtitle: "What we offer", href: "#services" },
  { title: "Portfolio", subtitle: "Our recent work", href: "#works" },
  { title: "Testimonials", subtitle: "What couples say", href: "#testimonials" },
  { title: "FAQ", subtitle: "Common questions", href: "#faq" },
  { title: "Contact", subtitle: "Get in touch", href: "#footer" },
];

export function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative z-50"
    >
      {/* Navbar Bar */}
      <nav className="flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full border border-border bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Shanoory Logo"
            width={24}
            height={24}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-semibold text-foreground mr-2 tracking-tighter">{data.brandName}</span>
        </Link>

        {/* Nav Actions */}
        <div className="flex items-center gap-2">
          <motion.a
            href={`tel:${data.contact.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border border-border bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <Phone className="w-5 h-5 text-muted-foreground" />
          </motion.a>
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border border-border bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Expanded Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 right-0 mt-4 overflow-hidden"
          >
            <div className="rounded-3xl border border-border bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden">
              {/* Menu Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block p-4 hover:bg-muted/50 transition-colors group ${
                        // Add border-right for items not in last column
                        (index + 1) % 3 !== 0 ? "lg:border-r border-border" : ""
                        } ${
                        // Add border-bottom for items not in last row
                        index < 3 ? "border-b border-border" : ""
                        }`}
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.subtitle}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Featured Image with CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="p-4"
              >
                <Link
                  href={data.cta.href}
                  onClick={closeMenu}
                  className="relative block w-full h-40 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={data.featured.image}
                    alt="Featured floral arrangement"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* CTA Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="inline-flex items-center gap-2 text-white text-2xl md:text-3xl font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {data.cta.label}
                      <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
