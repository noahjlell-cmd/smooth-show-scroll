import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans-clean ${
        scrolled
          ? "backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "hsl(0 0% 5% / 0.95)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Dovetail Strategic"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm tracking-widest uppercase font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? "text-white after:w-full"
                  : "text-white/60 hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 border border-white/30 text-white hover:bg-white hover:text-black hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
