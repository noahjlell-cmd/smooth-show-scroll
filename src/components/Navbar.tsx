import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const hasDarkHero = ["/", "/about", "/contact"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Brands", path: "/brands" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans-clean ${
        scrolled
          ? "backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "hsl(0 0% 92% / 0.97)", borderColor: "hsl(0 0% 78%)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Dovetail Strategic"
            className={`h-12 w-auto transition-all duration-300 group-hover:scale-105 ${!scrolled ? "brightness-[1.8]" : ""}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm tracking-widest uppercase font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${
                isHome && !scrolled
                  ? location.pathname === link.path
                    ? "text-white after:w-full after:bg-white"
                    : "text-white/60 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                  : location.pathname === link.path
                    ? "text-foreground after:w-full after:bg-foreground"
                    : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full after:bg-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 border hover:-translate-y-0.5 ${
              isHome && !scrolled
                ? "border-white/30 text-white hover:bg-white hover:text-black"
                : "text-foreground hover:bg-foreground hover:text-background"
            }`}
            style={isHome && !scrolled ? {} : { borderColor: "hsl(0 0% 30%)" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isHome && !scrolled ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md" style={{ borderColor: "hsl(0 0% 78%)" }}>
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase font-medium py-2 ${
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-6 py-2.5 text-sm tracking-widest uppercase font-medium border text-foreground text-center"
              style={{ borderColor: "hsl(0 0% 30%)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
