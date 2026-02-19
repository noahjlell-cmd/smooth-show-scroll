import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-navy font-sans-clean">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <img
          src={logo}
          alt="Dovetail Strategic"
          className="h-24 w-auto mb-10 opacity-90"
        />
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-6">
          Strategic Branding & Marketing
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-8 max-w-3xl">
          Building Brands.
          <span className="block text-primary">Driving Results.</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12">
          Dovetail Strategic partners with businesses to unlock seven-figure growth through purposeful branding, relentless execution, and authentic connection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/about"
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Meet the Team
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-white/20 text-white/70 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:border-white/50 hover:text-white hover:-translate-y-0.5"
          >
            Work With Us
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
