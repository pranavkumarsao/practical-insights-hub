import { Link } from "react-router-dom";
import { webinars } from "@/data/webinars";

export function UpcomingWebinars() {
  const upcomingWebinars = webinars.filter((w) => w.status === "upcoming").slice(0, 3);

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
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
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {upcomingWebinars.map((webinar, index) => (
            <Link
              key={webinar.id}
              to={`/webinars/${webinar.id}`}
              className={`bg-background p-6 md:p-8 group animate-fade-up stagger-${index + 1}`}
            >
              {/* Domain */}
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
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
                <span className="text-muted-foreground">{webinar.date}</span>
                {webinar.spotsLeft && (
                  <span className="text-primary">{webinar.spotsLeft} spots</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
