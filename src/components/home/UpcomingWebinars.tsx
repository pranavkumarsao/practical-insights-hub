import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { webinars } from "@/data/webinars";

export function UpcomingWebinars() {
  const upcomingWebinars = webinars.filter((w) => w.status === "upcoming").slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-[hsl(var(--glass-border))]">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="heading-section mb-2">
              Upcoming webinars
            </h2>
            <p className="text-body max-w-lg">
              Live sessions with practitioners. Learn, ask questions, implement immediately.
            </p>
          </div>
          <Link 
            to="/webinars"
            className="btn-link"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingWebinars.map((webinar, index) => (
            <Link
              key={webinar.id}
              to={`/webinars/${webinar.id}`}
              className={`glass-card p-6 group hover:border-primary/20 transition-all animate-fade-up stagger-${index + 1}`}
            >
              {/* Domain */}
              <p className="text-xs text-primary uppercase tracking-wider mb-4">
                {webinar.domainLabel}
              </p>

              {/* Title */}
              <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                {webinar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {webinar.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {webinar.date}
                </span>
                {webinar.spotsLeft && (
                  <span className="flex items-center gap-1.5 text-primary">
                    <Users className="w-3.5 h-3.5" />
                    {webinar.spotsLeft} spots
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}