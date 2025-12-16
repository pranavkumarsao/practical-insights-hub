import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container-tight">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-primary-foreground">
            Ready to learn practically?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Join our upcoming webinars and start building real skills that make 
            a difference in your career.
          </p>
          <Button asChild variant="secondary" size="xl" className="rounded-full">
            <Link to="/webinars">
              Explore Webinars
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
