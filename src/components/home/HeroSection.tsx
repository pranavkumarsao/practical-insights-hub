import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm text-muted-foreground mb-6 animate-fade-up">
            A different approach to learning
          </p>

          {/* Headline - no bold, uses font-medium */}
          <h1 className="heading-display mb-8 animate-fade-up stagger-1">
            Real-world skills.{" "}
            <span className="text-muted-foreground">Practical outcomes.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body-large max-w-xl mb-10 animate-fade-up stagger-2">
            We teach what actually matters—skills you can implement today, 
            with outcomes you can measure tomorrow.
          </p>

          {/* CTA */}
          <div className="animate-fade-up stagger-3">
            <Link 
              to="/webinars"
              className="inline-flex items-center text-sm text-primary hover:opacity-80 transition-opacity"
            >
              Explore upcoming webinars →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
