import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const skillTags = [
  "Design", "GenAI", "GTM", "Growth", "Automation", 
  "Strategy", "Marketing", "Analytics", "Product", "Leadership"
];

export function HeroSection() {
  return (
    <section className="relative bg-background min-h-screen overflow-hidden">
      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground uppercase">
            <span className="block">Real-World</span>
            <span className="block relative inline-block">
              Skills For
              <span className="absolute left-0 top-1/2 w-full h-3 bg-primary -rotate-6 -translate-y-1/2 opacity-90" />
            </span>
            <span className="block">Practical</span>
            <span className="block">Learning</span>
          </h1>

          {/* CTAs */}
          <div className="flex items-center gap-6 mt-10">
            <Button asChild size="lg" className="rounded-none px-8 py-6 text-base font-semibold uppercase tracking-wide">
              <Link to="/webinars">
                Learn Now
              </Link>
            </Button>
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors">
                <Play className="w-5 h-5 text-foreground fill-foreground" />
              </div>
              <span className="text-sm font-medium uppercase tracking-wide text-foreground">Watch Video</span>
            </button>
          </div>

          {/* Floating Tags */}
          <div className="mt-16 flex flex-wrap gap-3 max-w-lg">
            {skillTags.map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (Math.random() * 6)}deg)` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right - 3D Grid Tunnel */}
        <div className="relative bg-primary/5 hidden lg:flex items-center justify-center overflow-hidden">
          {/* Tunnel Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px]">
              {/* Concentric circles/tunnel effect */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-primary/20 rounded-full"
                  style={{
                    width: `${100 - i * 4}%`,
                    height: `${100 - i * 4}%`,
                    left: `${i * 2}%`,
                    top: `${i * 2}%`,
                    transform: `perspective(1000px) rotateX(75deg) translateZ(${i * 5}px)`,
                  }}
                />
              ))}
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                {/* Radial lines */}
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + 200 * Math.cos((i * 15 * Math.PI) / 180)}
                    y2={200 + 200 * Math.sin((i * 15 * Math.PI) / 180)}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Concentric circles */}
                {[...Array(10)].map((_, i) => (
                  <circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={20 + i * 18}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container-wide py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Company Logos */}
            <div className="flex items-center gap-8">
              <span className="text-sm font-semibold text-foreground">Microsoft</span>
              <span className="text-sm font-semibold text-foreground">Dropbox</span>
              <span className="text-sm font-semibold text-foreground">Google</span>
            </div>

            {/* Avatar Group + Stats */}
            <div className="flex items-center gap-4 justify-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">trained professionals</p>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="flex items-center gap-3 justify-end">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-sm text-muted-foreground max-w-[200px]">
                Outcome guarantee for all professionals who complete the program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
