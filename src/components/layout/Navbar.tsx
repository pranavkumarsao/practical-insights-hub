import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

const navLinks = [
  { href: "/webinars", label: "Webinars" },
  { href: "/why-us", label: "Why Us" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-surface border-b border-[hsl(var(--glass-border))]">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img src={logo} alt="The Practical World" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm transition-colors",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link 
              to="/webinars"
              className="btn-primary"
            >
              Explore Webinars
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[hsl(var(--glass-border))] glass-surface">
          <div className="container-wide py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-sm",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/webinars" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm text-primary"
            >
              Explore Webinars
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}