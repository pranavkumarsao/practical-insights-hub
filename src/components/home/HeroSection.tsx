import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-accent/30 min-h-screen">
      <div className="container-wide relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
                Getting You
                <br />
                Across The
                <br />
                <span className="relative inline-block">
                  Real World
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                <span className="text-primary">Knowledge</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                The Practical World is where professionals gain actionable skills they can apply immediately.
              </p>

              {/* CTA */}
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/webinars">
                  Getting Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              {/* Stats */}
              <div className="pt-12 flex flex-wrap gap-8">
                <div className="relative">
                  <div className="border-2 border-foreground/20 rounded-[2rem] px-8 py-6 relative">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-foreground/20 bg-background flex items-center justify-center text-xs font-medium">01</span>
                    <p className="text-4xl font-bold text-foreground">2024</p>
                    <p className="text-sm text-muted-foreground mt-1">Founded</p>
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="border-2 border-foreground/20 rounded-[2rem] px-8 py-6 relative">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-foreground/20 bg-background flex items-center justify-center text-xs font-medium">02</span>
                    <p className="text-4xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground mt-1">Professionals Trained</p>
                  </div>
                </div>
                <div className="relative -mt-4">
                  <div className="border-2 border-foreground/20 rounded-[2.5rem] px-6 py-4 rotate-12">
                    <p className="text-2xl font-bold text-foreground -rotate-12">50+</p>
                    <p className="text-xs text-muted-foreground -rotate-12">Webinars</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bento Grid */}
            <div className="grid grid-cols-2 gap-4 lg:pl-8">
              {/* Stat Card */}
              <div className="bg-accent rounded-3xl p-6 flex items-center gap-4">
                <p className="text-3xl font-bold text-foreground">1524</p>
                <p className="text-sm text-muted-foreground leading-tight">People completed<br />the quiz today</p>
              </div>

              {/* Image Card 1 */}
              <div className="bg-background rounded-3xl overflow-hidden row-span-2">
                <div className="h-full bg-gradient-to-br from-primary/10 to-primary/5 p-4 flex flex-col justify-between">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-accent overflow-hidden">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=400')] bg-cover bg-center" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">Well-lit spaces contribute to <strong className="text-foreground">focus.</strong></p>
                    <span className="text-primary text-2xl">✳</span>
                  </div>
                </div>
              </div>

              {/* Image Card 2 - Purple bg */}
              <div className="rounded-3xl overflow-hidden bg-[#E8D4F0] aspect-square">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400')] bg-cover bg-center opacity-90" />
              </div>

              {/* Quote Card */}
              <div className="bg-background rounded-3xl p-5 flex items-start gap-3">
                <span className="text-primary text-xl">✦</span>
                <p className="text-sm text-muted-foreground leading-relaxed">Mutual trust enhances team synergy.</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-background rounded-3xl p-5 flex items-center gap-4">
                <p className="text-3xl font-bold text-foreground">299+</p>
                <p className="text-sm text-muted-foreground leading-tight">On the platforms,<br />team excels.</p>
              </div>

              {/* Image Card 3 - Team */}
              <div className="rounded-3xl overflow-hidden bg-accent aspect-[4/3]">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400')] bg-cover bg-center" />
              </div>

              {/* Image Card 4 - Green bg */}
              <div className="rounded-3xl overflow-hidden bg-[#B8E6C1] row-span-2">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400')] bg-cover bg-center opacity-90" />
              </div>

              {/* Stat Card 3 */}
              <div className="bg-background rounded-3xl p-5 flex items-center gap-4">
                <p className="text-3xl font-bold text-foreground">551+</p>
                <p className="text-sm text-muted-foreground leading-tight">On the platforms,<br />team excels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
