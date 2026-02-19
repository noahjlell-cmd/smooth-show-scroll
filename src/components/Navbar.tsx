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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
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
              className={`relative text-sm tracking-widest uppercase font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 ${
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-foreground/70 hover:text-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
