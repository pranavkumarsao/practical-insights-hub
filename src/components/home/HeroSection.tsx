import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
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
          <p className="text-body-large max-w-xl mx-auto mb-10 animate-fade-up stagger-2">
            We teach what actually matters: skills you can implement today, 
            with outcomes you can measure tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up stagger-3">
            <Link 
              to="/webinars"
              className="btn-primary"
            >
              Explore Webinars
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/why-us"
              className="btn-secondary"
            >
              <Play className="w-4 h-4" />
              Why The Practical World
            </Link>
          </div>

          {/* Hero visual element */}
          <div className="mt-16 md:mt-20 animate-fade-up stagger-4">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">4+</p>
                  <p className="text-sm text-muted-foreground">Upcoming Webinars</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Practical Focus</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">Free</p>
                  <p className="text-sm text-muted-foreground">Live Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
