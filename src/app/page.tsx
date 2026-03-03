"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Globe,
  Code,
  Zap,
  CheckCircle,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Target,
  Flame,
  BarChart3,
  Search,
  Award,
  MessageSquare,
  Lightbulb,
  Eye,
  LifeBuoy,
  DollarSign,
  Rocket,
  Gift,
  Layout,
} from "lucide-react";

const navItems = [
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "pricing" },
  { name: "About", id: "about" },
];

const footerColumns = [
  {
    title: "Services",    items: [
      { label: "WordPress Websites", href: "#" },
      { label: "E-commerce Stores", href: "#" },
      { label: "Landing Pages", href: "#" },
      { label: "Speed Optimization", href: "#" },
      { label: "Website Maintenance", href: "#" },
    ],
  },
  {
    title: "Company",    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",    items: [
      { label: "FAQ", href: "#" },
      { label: "Web Design Guide", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function HomePage() {
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
            text: "Get Free Consultation",            href: "/contact"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Websites That Convert Visitors Into Paying Clients"
          description="We design, build and maintain high-performance websites that grow your business. From WordPress sites to e-commerce stores, we create solutions that convert."
          tag="Premium Web Solutions"
          background={{ variant: "glowing-orb" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-modern-premium-web-design-and-developm-1772534363140-b2bf1f7a.png"
          imageAlt="Modern web design dashboard interface"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              name: "Maria Jovanovic",              handle: "Owner, E-commerce Store",              testimonial:
                "AviCoding transformed our online presence. Our sales increased by 42% in just 3 months!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-owne-1772534361864-1a4ef578.png?_wi=1"},
            {
              name: "Stefan Dimitrijevic",              handle: "Marketing Director, Local Brand",              testimonial:
                "Professional, reliable, and results-oriented. Exactly what we needed for our digital presence.",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-female-entrep-1772534362166-5a49c30c.png?_wi=1"},
            {
              name: "Ana Milic",              handle: "Salon Owner",              testimonial:
                "The new website brought in so many new clients. AviCoding's support is outstanding!",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-prof-1772534362506-bb6e59a8.png?_wi=1"},
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Get a Free Consultation", href: "/contact" },
            { text: "View Our Work", href: "/portfolio" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="AviCoding: Building Digital Presence for European Businesses"
          metrics={[
            {
              icon: Globe,
              label: "Serving Clients Across",              value: "Europe"},
            {
              icon: Code,
              label: "WordPress & Web Development",              value: "Expert"},
            {
              icon: Zap,
              label: "Performance Optimized",              value: "100%"},
            {
              icon: CheckCircle,
              label: "Long-term Support",              value: "Always"},
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Our Services"
          description="Comprehensive web solutions tailored to your business needs"
          features={[
            {
              id: "1",              title: "Custom WordPress Websites",              description:
                "Professional, fully customized WordPress websites built to your specifications. We handle everything from design to deployment and ongoing maintenance.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-modern-wordpress-website-dashboard-int-1772534363949-f30a1051.png"},
              items: [
                { icon: Palette, text: "Custom Design" },
                { icon: Code, text: "Clean Code" },
                { icon: Smartphone, text: "Fully Responsive" },
              ],
              reverse: false,
            },
            {
              id: "2",              title: "E-commerce Development",              description:
                "WooCommerce and advanced e-commerce solutions that convert. We optimize for sales with streamlined checkout flows and product management systems.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-professional-e-commerce-website-interf-1772534363405-baa8b36c.png"},
              items: [
                { icon: ShoppingCart, text: "WooCommerce Expert" },
                { icon: Zap, text: "Fast Checkout" },
                { icon: TrendingUp, text: "Conversion Focused" },
              ],
              reverse: true,
            },
            {
              id: "3",              title: "Landing Pages for Ads",              description:
                "High-converting landing pages designed specifically for your advertising campaigns. Optimized for cost-per-acquisition and maximum ROI.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-high-converting-landing-page-design-fo-1772534365645-4bbe1daa.png"},
              items: [
                { icon: Target, text: "Ad Optimized" },
                { icon: Flame, text: "High Converting" },
                { icon: BarChart3, text: "ROI Focused" },
              ],
              reverse: false,
            },
            {
              id: "4",              title: "Speed & SEO Optimization",              description:
                "Lightning-fast websites with SEO foundations built in. We optimize performance, mobile experience, and search rankings to drive organic traffic.",              media: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-website-speed-optimization-dashboard-s-1772534363850-0081c17a.png"},
              items: [
                { icon: Zap, text: "Speed Optimized" },
                { icon: Search, text: "SEO Ready" },
                { icon: Award, text: "Best Practices" },
              ],
              reverse: true,
            },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardOne
          title="Why Choose AviCoding"
          description="We combine technical excellence with business strategy"
          metrics={[
            {
              id: "1",              value: "24h",              title: "Fast Delivery",              description: "Quick turnaround times without compromising quality",              icon: Zap,
            },
            {
              id: "2",              value: "100%",              title: "Transparent Pricing",              description: "Clear pricing structure with no hidden fees",              icon: DollarSign,
            },
            {
              id: "3",              value: "∞",              title: "Ongoing Support",              description: "Long-term support and maintenance included",              icon: LifeBuoy,
            },
            {
              id: "4",              value: "+98%",              title: "Results Driven",              description: "Average conversion rate improvement for clients",              icon: TrendingUp,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Let's Get Started", href: "pricing" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped grow"
          testimonials={[
            {
              id: "1",              name: "Marko Petrovic",              role: "Owner",              company: "E-commerce Startup",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-owne-1772534361864-1a4ef578.png?_wi=2"},
            {
              id: "2",              name: "Jovana Stosic",              role: "Marketing Manager",              company: "Fashion Boutique",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-female-entrep-1772534362166-5a49c30c.png?_wi=2"},
            {
              id: "3",              name: "Nikola Cvetkovic",              role: "Founder",              company: "Digital Marketing Agency",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-business-prof-1772534362506-bb6e59a8.png?_wi=2"},
            {
              id: "4",              name: "Milica Markovic",              role: "Owner",              company: "Beauty Salon",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-young-entrepr-1772534362686-b947072e.png"},
            {
              id: "5",              name: "Aleksandar Novak",              role: "Manager",              company: "Fitness Studio",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-service-busin-1772534362581-349392c1.png"},
            {
              id: "6",              name: "Tamara Jankovic",              role: "CEO",              company: "Law Firm",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/professional-headshot-of-a-small-busines-1772534361921-8aa842c3.png"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business needs"
          plans={[
            {
              id: "starter",              badge: "Good Start",              price: "€1,999",              subtitle: "Perfect for small businesses launching online",              features: [
                "Professional WordPress website",                "Mobile responsive design",                "Basic SEO setup",                "3 months support",                "Domain & hosting assistance"],
              badgeIcon: Zap,
            },
            {
              id: "business",              badge: "Most Popular",              price: "€4,499",              subtitle: "Ideal for established businesses wanting to scale",              features: [
                "Custom WordPress or WooCommerce store",                "Advanced SEO optimization",                "Monthly performance reports",                "12 months ongoing support",                "Speed optimization",                "Advanced analytics setup",                "Marketing campaign landing pages"],
              badgeIcon: CheckCircle,
            },
            {
              id: "premium",              badge: "Enterprise",              price: "€8,999+",              subtitle: "Full-service digital transformation",              features: [
                "Bespoke web application or complex site",                "E-commerce with payment integration",                "Custom integrations & API setup",                "Unlimited revisions during development",                "24/7 priority support",                "Quarterly strategy reviews",                "Dedicated account manager"],
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