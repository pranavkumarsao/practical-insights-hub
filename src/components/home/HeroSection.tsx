import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-muted-foreground">A different approach to learning</span>
          </div>

          {/* Main headline */}
          <h1 className="heading-display mb-6 animate-fade-up stagger-1">
            Learn skills that{" "}
            <span className="relative">
              <span className="text-primary">actually work</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up stagger-2 leading-relaxed">
            Practical, outcome-driven webinars by industry practitioners. 
            No fluff. Just skills you can implement today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Link 
              to="/webinars"
              className="btn-primary text-base px-8 py-4"
            >
              Explore Webinars
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/why-us"
              className="btn-secondary text-base px-8 py-4"
            >
              Why The Practical World
            </Link>
          </div>

          {/* Hero card with stats */}
          <div className="animate-fade-up stagger-4">
            <div className="glass-card p-1">
              <div className="bg-gradient-to-b from-[hsl(var(--glass-bg))] to-transparent rounded-lg p-8 md:p-12">
                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-medium text-foreground mb-1">4+</p>
                    <p className="text-sm text-muted-foreground">Live Webinars</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-medium text-foreground mb-1">100%</p>
                    <p className="text-sm text-muted-foreground">Practical Focus</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-medium text-primary mb-1">Live</p>
                    <p className="text-sm text-muted-foreground">Interactive Q&A</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-medium text-foreground mb-1">90+</p>
                    <p className="text-sm text-muted-foreground">Min Per Session</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-[hsl(var(--glass-border))]" />

                {/* Domains */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="text-xs text-muted-foreground">Topics:</span>
                  {["Design + GenAI", "Go-To-Market", "Growth", "Automation"].map((domain) => (
                    <span 
                      key={domain}
                      className="px-3 py-1.5 text-xs text-foreground bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))] rounded-full"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center gap-4 animate-fade-up stagger-5">
            <p className="text-xs text-muted-foreground">Trusted by professionals from</p>
            <div className="flex items-center gap-8 opacity-50">
              {["Startups", "Agencies", "Enterprises", "Freelancers"].map((type) => (
                <span key={type} className="text-sm text-muted-foreground font-medium">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
