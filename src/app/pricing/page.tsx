"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Zap,
  CheckCircle,
  Rocket,
} from "lucide-react";

const navItems = [
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "pricing" },
  { name: "About", id: "about" },
];

const footerColumns = [
  {
    title: "Services",
    items: [
      { label: "WordPress Websites", href: "#" },
      { label: "E-commerce Stores", href: "#" },
      { label: "Landing Pages", href: "#" },
      { label: "Speed Optimization", href: "#" },
      { label: "Website Maintenance", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "FAQ", href: "#" },
      { label: "Web Design Guide", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function PricingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSizeMediumTitles"
      background="blurBottom"
      cardStyle="outline"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="AviCoding"
          navItems={navItems}
          button={{
            text: "Get Free Consultation",
            href: "/contact",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business needs"
          plans={[
            {
              id: "starter",
              badge: "Good Start",
              price: "€1,999",
              subtitle: "Perfect for small businesses launching online",
              features: [
                "Professional WordPress website",
                "Mobile responsive design",
                "Basic SEO setup",
                "3 months support",
                "Domain & hosting assistance",
              ],
              badgeIcon: Zap,
            },
            {
              id: "business",
              badge: "Most Popular",
              price: "€4,499",
              subtitle: "Ideal for established businesses wanting to scale",
              features: [
                "Custom WordPress or WooCommerce store",
                "Advanced SEO optimization",
                "Monthly performance reports",
                "12 months ongoing support",
                "Speed optimization",
                "Advanced analytics setup",
                "Marketing campaign landing pages",
              ],
              badgeIcon: CheckCircle,
            },
            {
              id: "premium",
              badge: "Enterprise",
              price: "€8,999+",
              subtitle: "Full-service digital transformation",
              features: [
                "Bespoke web application or complex site",
                "E-commerce with payment integration",
                "Custom integrations & API setup",
                "Unlimited revisions during development",
                "24/7 priority support",
                "Quarterly strategy reviews",
                "Dedicated account manager",
              ],
              badgeIcon: Rocket,
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Have questions? We have answers. Here's what our clients commonly ask."
          faqs={[
            {
              id: "1",
              title: "How long does a website project typically take?",
              content:
                "Most projects take 4-8 weeks depending on complexity. WordPress sites are typically faster, while custom builds or e-commerce stores may take longer. We provide detailed timelines during the consultation phase.",
            },
            {
              id: "2",
              title: "Do you provide domain and hosting?",
              content:
                "We don't host sites ourselves, but we help you set up domain registration and hosting with reliable providers. We handle all technical setup so you don't have to worry about it.",
            },
            {
              id: "3",
              title: "What's included in ongoing support?",
              content:
                "Our support plans include plugin updates, security monitoring, backups, performance optimization, and quick bug fixes. We're here to keep your website running smoothly long-term.",
            },
            {
              id: "4",
              title: "Can you help with website redesigns?",
              content:
                "Absolutely! We specialize in redesigning outdated websites. We preserve what works, modernize the design, improve user experience, and often achieve significant improvement in conversions.",
            },
            {
              id: "5",
              title: "Do you build e-commerce stores?",
              content:
                "Yes, we build WooCommerce and custom e-commerce solutions. We optimize for sales, handle payment processing, inventory management, and provide training on store operations.",
            },
            {
              id: "6",
              title: "What's your design process like?",
              content:
                "We start with discovery and strategy, create wireframes for approval, design mockups, then build and test. You're involved at each stage to ensure the final result matches your vision.",
            },
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2025 AviCoding. All rights reserved. Based in Serbia, serving Europe."
          bottomRightText="Made with passion for digital excellence."
        />
      </div>
    </ThemeProvider>
  );
}