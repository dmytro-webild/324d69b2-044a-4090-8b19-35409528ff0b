"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  MessageSquare,
  Target,
  Lightbulb,
  Palette,
  Eye,
  Code,
  CheckCircle,
  Rocket,
  BarChart3,
  Gift,
  Zap,
  DollarSign,
  LifeBuoy,
  TrendingUp,
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

export default function AboutPage() {
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

      <div id="process" data-section="process">
        <FeatureCardTen
          title="Our Process"
          description="A streamlined approach from discovery to launch and growth"
          features={[
            {
              id: "1",
              title: "Consultation & Discovery",
              description:
                "We start by understanding your business goals, target audience, and vision. This foundation guides every decision we make.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-professional-consultation-meeting-betw-1772534362968-384481e8.png",
              },
              items: [
                { icon: MessageSquare, text: "Listen & Understand" },
                { icon: Target, text: "Define Goals" },
                { icon: Lightbulb, text: "Brainstorm Solutions" },
              ],
              reverse: false,
            },
            {
              id: "2",
              title: "Strategy & Design",
              description:
                "Our team creates wireframes, mockups, and visual designs that align with your brand. We prioritize user experience and conversion.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-designer-working-on-wireframes-and-ui--1772534362820-086e40da.png",
              },
              items: [
                { icon: Palette, text: "Visual Design" },
                { icon: Eye, text: "UX Strategy" },
                { icon: Eye, text: "User Focused" },
              ],
              reverse: true,
            },
            {
              id: "3",
              title: "Development & Build",
              description:
                "We build your website using clean, optimized code. WordPress, custom development, or e-commerce—we deliver production-ready sites.",
              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-developer-coding-on-multiple-monitors--1772534363176-8f581267.png",
              },
              items: [
                { icon: Code, text: "Clean Code" },
                { icon: Zap, text: "Optimized" },
                { icon: CheckCircle, text: "Quality Assured" },
              ],
              reverse: false,
            },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <MetricCardOne
          title="Our Commitment"
          description="Excellence in every project, every time"
          metrics={[
            {
              id: "1",
              value: "24h",
              title: "Fast Delivery",
              description: "Quick turnaround times without compromising quality",
              icon: Zap,
            },
            {
              id: "2",
              value: "100%",
              title: "Transparent Pricing",
              description: "Clear pricing structure with no hidden fees",
              icon: DollarSign,
            },
            {
              id: "3",
              value: "∞",
              title: "Ongoing Support",
              description: "Long-term support and maintenance included",
              icon: LifeBuoy,
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped grow"
          testimonials={[
            {
              id: "1",
              name: "Marko Petrovic",
              role: "Owner",
              company: "E-commerce Startup",
              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-owne-1772534361864-1a4ef578.png",
            },
            {
              id: "2",
              name: "Jovana Stosic",
              role: "Marketing Manager",
              company: "Fashion Boutique",
              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-female-entrep-1772534362166-5a49c30c.png",
            },
            {
              id: "3",
              name: "Nikola Cvetkovic",
              role: "Founder",
              company: "Digital Marketing Agency",
              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-prof-1772534362506-bb6e59a8.png",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
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