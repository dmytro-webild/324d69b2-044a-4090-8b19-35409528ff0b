"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FooterSimple from "@/components/sections/footer/FooterSimple";

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

export default function PortfolioPage() {
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

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          title="Our Portfolio"
          description="Real results from real businesses. Here are some of our recent projects."
          products={[
            {
              id: "1",
              name: "E-commerce Store Redesign",
              price: "+42% Conversions",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-modern-e-commerce-store-website-design-1772534364855-36ab663b.png",
              imageAlt: "E-commerce store website",
            },
            {
              id: "2",
              name: "Vape Shop Website",
              price: "+156% Traffic",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-sleek-modern-vape-shop-website-design--1772534364108-c14d04c5.png",
              imageAlt: "Vape shop modern website",
            },
            {
              id: "3",
              name: "Orthopedic Supply Store",
              price: "+89% Leads",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-professional-medical-supply-store-webs-1772534369621-043d802b.png",
              imageAlt: "Medical supply store website",
            },
            {
              id: "4",
              name: "Marketing Agency Website",
              price: "+5 New Clients",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-modern-marketing-agency-website-showca-1772534368060-4b8d136f.png",
              imageAlt: "Marketing agency portfolio",
            },
            {
              id: "5",
              name: "Personal Brand Website",
              price: "+200% Inquiries",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AQoiK0cfH6yVn0KJDPULLa1Z6v/a-personal-brand-website-featuring-a-pro-1772534363297-1389c177.png",
              imageAlt: "Personal brand website",
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