import Navbar from "@/components/Navbar";
import herschel from "@/assets/brand-herschel.png";
import bose from "@/assets/brand-bose.png";
import ogio from "@/assets/brand-ogio.png";
import stanley from "@/assets/brand-stanley.png";
import arcticzone from "@/assets/brand-arcticzone.png";
import bellacanvas from "@/assets/brand-bellacanvas.png";
import camelbak from "@/assets/brand-camelbak.png";
import carhartt from "@/assets/brand-carhartt.png";
import columbia from "@/assets/brand-columbia.png";
import gfore from "@/assets/brand-gfore.png";
import hydroflask from "@/assets/brand-hydroflask.png";
import adidas from "@/assets/brand-adidas.png";
import melin from "@/assets/brand-melin.png";
import jbl from "@/assets/brand-jbl.png";
import johnnieo from "@/assets/brand-johnnieo.png";
import tumi from "@/assets/brand-tumi.png";
import mophie from "@/assets/brand-mophie.png";
import nike from "@/assets/brand-nike.png";
import northface from "@/assets/brand-northface.png";
import owala from "@/assets/brand-owala.png";
import petermillar from "@/assets/brand-petermillar.png";
import imperial from "@/assets/brand-imperial.png";
import yeti from "@/assets/brand-yeti.png";
import stitch from "@/assets/brand-stitch.png";
import thule from "@/assets/brand-thule.png";
import underarmour from "@/assets/brand-underarmour.png";
import rtic from "@/assets/brand-rtic.png";
import patagonia from "@/assets/brand-patagonia.png";

const brands = [
  { name: "Nike", img: nike, category: "Sportswear & Apparel" },
  { name: "Adidas", img: adidas, category: "Sportswear & Apparel" },
  { name: "The North Face", img: northface, category: "Outdoor Apparel" },
  { name: "Columbia", img: columbia, category: "Outdoor Apparel" },
  { name: "Carhartt", img: carhartt, category: "Workwear & Apparel" },
  { name: "Bella+Canvas", img: bellacanvas, category: "Apparel" },
  { name: "johnnie-O", img: johnnieo, category: "Golf & Lifestyle" },
  { name: "G/FORE", img: gfore, category: "Golf & Lifestyle" },
  { name: "Melin", img: melin, category: "Headwear" },
  { name: "Herschel Supply Co.", img: herschel, category: "Bags & Accessories" },
  { name: "OGIO", img: ogio, category: "Bags & Gear" },
  { name: "TUMI", img: tumi, category: "Luggage & Bags" },
  { name: "Stanley", img: stanley, category: "Drinkware" },
  { name: "Hydro Flask", img: hydroflask, category: "Drinkware" },
  { name: "CamelBak", img: camelbak, category: "Hydration" },
  { name: "Owala", img: owala, category: "Drinkware" },
  { name: "Arctic Zone", img: arcticzone, category: "Coolers & Drinkware" },
  { name: "YETI", img: yeti, category: "Drinkware & Coolers" },
  { name: "RTIC", img: rtic, category: "Drinkware & Coolers" },
  { name: "Bose", img: bose, category: "Audio & Tech" },
  { name: "JBL", img: jbl, category: "Audio & Tech" },
  { name: "Mophie", img: mophie, category: "Tech Accessories" },
  { name: "Peter Millar", img: petermillar, category: "Luxury Apparel" },
  { name: "Patagonia", img: patagonia, category: "Outdoor Apparel" },
  { name: "Under Armour", img: underarmour, category: "Sportswear & Apparel" },
  { name: "Imperial", img: imperial, category: "Headwear" },
  { name: "Stitch", img: stitch, category: "Custom Branding" },
  { name: "Thule", img: thule, category: "Bags & Gear" },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-40 pb-28 px-6 overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(215 25% 15%) 0%, hsl(215 20% 10%) 40%, hsl(0 0% 5%) 100%)" }}
      >
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, hsl(0 0% 100%) 0px, hsl(0 0% 100%) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(90deg, hsl(0 0% 100%) 0px, hsl(0 0% 100%) 1px, transparent 1px, transparent 80px)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "hsl(0 0% 60%)" }}>
            Our Portfolio
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8" style={{ color: "hsl(0 0% 98%)" }}>
            Brands We
            <br />
            <span style={{ color: "hsl(0 0% 65%)" }}>Work With</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>
            We partner with the world's most recognized brands to deliver premium promotional products and branded merchandise.
          </p>
        </div>

        {/* Stat bar */}
        <div
          className="relative max-w-4xl mx-auto mt-20 grid grid-cols-3 border-t"
          style={{ borderColor: "hsl(0 0% 25%)" }}
        >
          {[
            { value: "200+", label: "Brand Partners" },
            { value: "1000+", label: "Unique Products Sourced" },
            { value: "100%", label: "Premium Quality" },
          ].map((s, i) => (
            <div
              key={i}
              className={`pt-8 text-center ${i < 2 ? "border-r" : ""}`}
              style={{ borderColor: "hsl(0 0% 25%)" }}
            >
              <div className="text-4xl font-bold mb-1" style={{ color: "hsl(0 0% 98%)" }}>{s.value}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 55%)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-24 px-6" style={{ background: "hsl(0 0% 98%)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-16 text-center" style={{ color: "hsl(0 0% 50%)" }}>
            Trusted Partners
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px" style={{ background: "hsl(0 0% 82%)" }}>
            {brands.map((brand, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center justify-center gap-4 p-10 cursor-default transition-all duration-300"
                style={{ background: "hsl(0 0% 98%)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "hsl(0 0% 93%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "hsl(0 0% 98%)")}
              >
                <div className="flex items-center justify-center h-20 w-full">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ filter: "grayscale(100%) contrast(1.1)", maxHeight: "80px", maxWidth: "160px" }}
                  />
                </div>
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 50%)" }}>
                    {brand.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="py-6 overflow-hidden border-y" style={{ background: "hsl(0 0% 8%)", borderColor: "hsl(0 0% 15%)" }}>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-xs tracking-[0.3em] uppercase shrink-0" style={{ color: "hsl(0 0% 50%)" }}>
              {b.name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ background: "hsl(0 0% 93%)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: "hsl(0 0% 50%)" }}>
            Ready to Partner?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "hsl(0 0% 8%)" }}>
            Let's find the perfect brand for your next campaign
          </h2>
          <p className="mb-10 leading-relaxed" style={{ color: "hsl(0 0% 40%)" }}>
            Our team has deep relationships with premium brands to source exactly what you need.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: "hsl(0 0% 20%)", color: "hsl(0 0% 8%)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 8%)";
              (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 98%)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "hsl(0 0% 8%)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t text-center" style={{ borderColor: "hsl(0 0% 88%)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "hsl(0 0% 60%)" }}>
          © {new Date().getFullYear()} Dovetail Strategic. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Brands;
