import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Squares from "@/components/ui/Squares";

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">

      {/* background */}
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />

      {/* content */}
      <div className="relative z-10 container-wide">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-6">
            A different approach to learning
          </p>

          <h1 className="heading-display mb-8">
            Real-world skills{" "}
            <span className="text-muted-foreground">
              Practical outcomes.
            </span>
          </h1>

          <p className="text-body-large max-w-xl mb-10">
            We teach what actually matters: skills you can implement today,
            with outcomes you can measure tomorrow.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/webinars" className="btn-primary">
              Explore Webinars
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/why-us" className="btn-secondary">
              Why The Practical World
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
