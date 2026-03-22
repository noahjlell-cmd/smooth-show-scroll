import { Link } from "react-router-dom";
import { Lightbulb, Search, Package, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import logo from "@/assets/logo.png";

import brandNike from "@/assets/brand-nike.png";
import brandPatagonia from "@/assets/brand-patagonia.png";
import brandCarhartt from "@/assets/brand-carhartt.png";
import brandColumbia from "@/assets/brand-columbia.png";
import brandNorthface from "@/assets/brand-northface.png";
import brandBose from "@/assets/brand-bose.png";
import brandYeti from "@/assets/brand-yeti.png";
import brandStanley from "@/assets/brand-stanley.png";
import brandHydroflask from "@/assets/brand-hydroflask.png";
import brandTumi from "@/assets/brand-tumi.png";
import brandUnderarmour from "@/assets/brand-underarmour.png";
import brandPetermillar from "@/assets/brand-petermillar.png";

const featuredBrands = [
  brandNike, brandPatagonia, brandCarhartt, brandColumbia,
  brandNorthface, brandBose, brandYeti, brandStanley,
  brandHydroflask, brandTumi, brandUnderarmour, brandPetermillar,
];

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    desc: "We craft purposeful brand identities that resonate with your audience and drive measurable growth.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Product Sourcing",
    desc: "Access 1000+ unique products from 200+ premium brand partners, curated for your vision.",
    icon: Search,
  },
  {
    number: "03",
    title: "Custom Merchandise",
    desc: "From concept to delivery — branded merchandise programs that elevate your company culture.",
    icon: Package,
  },
  {
    number: "04",
    title: "Corporate Gifting",
    desc: "Thoughtful, high-impact gifting solutions that strengthen relationships and leave lasting impressions.",
    icon: Gift,
  },
];

const stats = [
  { value: "200+", label: "Brand Partners" },
  { value: "1000+", label: "Unique Products" },
  { value: "50+", label: "Years Experience" },
  { value: "7-Figure", label: "Revenue Growth" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans-clean">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "hsl(0 0% 5%)" }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <img
            src={logo}
            alt="Dovetail Strategic"
            className="h-16 w-auto mx-auto mb-10 opacity-80"
          />
          <p
            className="text-xs tracking-[0.35em] uppercase font-medium mb-8"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            Strategic Branding & Marketing
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Building Brands.
            <br />
            <span style={{ color: "hsl(0 0% 55%)" }}>Driving Results.</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ color: "hsl(0 0% 45%)" }}
          >
            Dovetail Strategic partners with businesses to unlock seven-figure
            growth through purposeful branding, relentless execution, and
            authentic connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "hsl(0 0% 95%)", color: "hsl(0 0% 5%)" }}
            >
              Meet the Team
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "hsl(0 0% 30%)", color: "hsl(0 0% 70%)" }}
            >
              Work With Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "hsl(0 0% 35%)" }}>
            Scroll
          </span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, hsl(0 0% 35%), transparent)" }} />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y py-16" style={{ background: "hsl(0 0% 96%)", borderColor: "hsl(0 0% 85%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: "hsl(0 0% 10%)" }}>
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "hsl(0 0% 50%)" }}>
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "hsl(0 0% 85%)" }}>
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-background p-10 md:p-14 group hover:bg-[hsl(0_0%_96%)] transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-8 h-8" style={{ color: "hsl(0 0% 45%)" }} strokeWidth={1.5} />
                  <span
                    className="font-display text-5xl font-bold transition-colors duration-300"
                    style={{ color: "hsl(0 0% 88%)" }}
                  >
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(0 0% 45%)" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-24 border-t" style={{ background: "hsl(0 0% 93%)", borderColor: "hsl(0 0% 85%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "hsl(0 0% 45%)" }}>
              Trusted Partners
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 10%)" }}>
              200+ Premium Brands
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px" style={{ background: "hsl(0 0% 82%)" }}>
            {featuredBrands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 md:p-8 transition-all duration-300 hover:bg-white/80"
                style={{ background: "hsl(0 0% 96%)" }}
              >
                <img
                  src={brand}
                  alt="Brand partner"
                  className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/brands"
              className="inline-block px-10 py-4 border text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "hsl(0 0% 30%)", color: "hsl(0 0% 30%)" }}
            >
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32" style={{ background: "hsl(0 0% 5%)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase font-medium mb-6" style={{ color: "hsl(0 0% 40%)" }}>
            Ready to Grow?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8" style={{ color: "hsl(0 0% 95%)" }}>
            Let's Build Something
            <span className="block" style={{ color: "hsl(0 0% 55%)" }}>Extraordinary</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
            Whether you're scaling your brand or launching something new, we're
            ready to make it happen.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "hsl(0 0% 95%)", color: "hsl(0 0% 5%)" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ background: "hsl(0 0% 88%)", borderColor: "hsl(0 0% 78%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 45%)" }}>
            © {new Date().getFullYear()} Dovetail Strategic. All rights reserved.
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 40%)" }}>
            Building Legacies. Driving Results.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
