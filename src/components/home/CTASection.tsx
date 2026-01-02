import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
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
          className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Explore Webinars
        </Link>
      </div>
    </section>
  );
}
