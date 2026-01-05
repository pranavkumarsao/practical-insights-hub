import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-[hsl(var(--glass-border))]">
      <div className="container-tight text-center">
        <h2 className="heading-section mb-4">
          Ready to learn practically?
        </h2>
        <p className="text-body max-w-md mx-auto mb-8">
          Join our upcoming webinars and start building real skills that make 
          a difference in your career.
        </p>
        <Link 
          to="/webinars"
          className="btn-primary"
        >
          Explore Webinars
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}