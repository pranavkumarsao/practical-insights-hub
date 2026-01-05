import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const footerLinks = {
  product: [
    { href: "/webinars", label: "Webinars" },
    { href: "/why-us", label: "Why Us" },
    { href: "/about", label: "About" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "FAQ" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--glass-border))]">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="The Practical World" className="h-20" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Real-world learning with practical implementation and measurable outcomes.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[hsl(var(--glass-border))]">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Practical World
          </p>
        </div>
      </div>
    </footer>
  );
}