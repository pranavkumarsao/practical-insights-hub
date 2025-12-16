import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live webinars starting January 2025
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up stagger-1">
              Learn skills that{" "}
              <span className="text-primary">actually work</span>{" "}
              in the real world
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up stagger-2">
              Practical, outcome-driven learning for professionals who want to build, 
              implement, and measure what they learn. No fluff, just results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/webinars">
                  Explore Webinars
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/why-us">
                  Why Practical World
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-border animate-fade-up stagger-4">
              <p className="text-sm text-muted-foreground mb-3">Trusted by professionals from</p>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground/60">
                <span className="text-sm font-semibold">Google</span>
                <span className="text-sm font-semibold">Flipkart</span>
                <span className="text-sm font-semibold">Razorpay</span>
                <span className="text-sm font-semibold">Freshworks</span>
                <span className="text-sm font-semibold">Swiggy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
