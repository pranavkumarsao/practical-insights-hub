import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WebinarCard } from "@/components/webinar/WebinarCard";
import { webinars } from "@/data/webinars";

export function UpcomingWebinars() {
  const upcomingWebinars = webinars.filter((w) => w.status === "upcoming").slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Live, interactive sessions with industry practitioners. 
              Learn, ask questions, and implement immediately.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/webinars">
              View all webinars
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingWebinars.map((webinar, index) => (
            <WebinarCard 
              key={webinar.id} 
              webinar={webinar}
              className={`animate-fade-up stagger-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
