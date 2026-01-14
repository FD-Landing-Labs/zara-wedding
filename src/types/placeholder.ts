// Types for placeholder.json data structure

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  logo: {
    default: string;
    white: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface NavLink {
  name: string;
  href: string;
}

export interface MenuLink extends NavLink {
  number: string;
}

export interface NavbarData {
  brandName: string;
  brandMark: string;
  barLinks: NavLink[];
  cta: {
    label: string;
    href: string;
  };
  menuLinks: MenuLink[];
  featured: {
    studioName: string;
    image: string;
    copyright: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  socialLinks: NavLink[];
}

export interface HeroData {
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
    secondary: {
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
}

export interface IntroData {
  sectionLabel: string;
  sectionNumber: string;
  headline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface WhyUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyUsStat {
  value: string;
  label: string;
}

export interface WhyUsData {
  sectionLabel: string;
  sectionNumber: string;
  headline: {
    main: string;
    highlight: string;
  };
  features: WhyUsFeature[];
  stats: WhyUsStat[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ServicesData {
  sectionLabel: string;
  sectionNumber: string;
  headline: string;
  description: string;
  items: ServiceItem[];
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface WorksData {
  sectionLabel: string;
  sectionNumber: string;
  headline: string;
  description: string;
  viewAllLink: {
    label: string;
    href: string;
  };
  items: WorkItem[];
}

export interface PromoData {
  sectionNumber: string;
  headline: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsData {
  sectionLabel: string;
  sectionNumber: string;
  headline: string;
  description: string;
  items: TestimonialItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQData {
  sectionLabel: string;
  sectionNumber: string;
  headline: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  items: FAQItem[];
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  brand: {
    name: string;
    tagline: string;
    brandMark: string;
  };
  description: {
    text: string;
    highlight: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  newsletter: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  linkGroups: FooterLinkGroup[];
  bottomLinks: NavLink[];
  copyright: string;
}

export interface PlaceholderData {
  site: SiteData;
  navbar: NavbarData;
  hero: HeroData;
  intro: IntroData;
  whyUs: WhyUsData;
  services: ServicesData;
  works: WorksData;
  promo: PromoData;
  testimonials: TestimonialsData;
  faq: FAQData;
  footer: FooterData;
}
