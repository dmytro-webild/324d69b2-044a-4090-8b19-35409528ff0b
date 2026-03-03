"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Palette,
  Code,
  Smartphone,
  ShoppingCart,
  Zap,
  TrendingUp,
  Target,
  Flame,
  BarChart3,
  Search,
  Award,
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

export default function ServicesPage() {
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

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Our Services"
          description="Comprehensive web solutions tailored to your business needs"
          features={[
            {
              id: "1",
              title: "Custom WordPress Websites",
              description:
                "Professional, fully customized WordPress websites built to your specifications. We handle everything from design to deployment and ongoing maintenance.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-modern-wordpress-website-dashboard-int-1772534363949-f30a1051.png",
              },
              items: [
                { icon: Palette, text: "Custom Design" },
                { icon: Code, text: "Clean Code" },
                { icon: Smartphone, text: "Fully Responsive" },
              ],
              reverse: false,
            },
            {
              id: "2",
              title: "E-commerce Development",
              description:
                "WooCommerce and advanced e-commerce solutions that convert. We optimize for sales with streamlined checkout flows and product management systems.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-professional-e-commerce-website-interf-1772534363405-baa8b36c.png",
              },
              items: [
                { icon: ShoppingCart, text: "WooCommerce Expert" },
                { icon: Zap, text: "Fast Checkout" },
                { icon: TrendingUp, text: "Conversion Focused" },
              ],
              reverse: true,
            },
            {
              id: "3",
              title: "Landing Pages for Ads",
              description:
                "High-converting landing pages designed specifically for your advertising campaigns. Optimized for cost-per-acquisition and maximum ROI.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-high-converting-landing-page-design-fo-1772534365645-4bbe1daa.png",
              },
              items: [
                { icon: Target, text: "Ad Optimized" },
                { icon: Flame, text: "High Converting" },
                { icon: BarChart3, text: "ROI Focused" },
              ],
              reverse: false,
            },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
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