import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { webinars } from "@/data/webinars";
import { cn } from "@/lib/utils";

const WebinarDetail = () => {
  const { id } = useParams();
  const webinar = webinars.find((w) => w.id === id);

  if (!webinar) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-lg font-medium mb-4">Webinar not found</h1>
          <Link to="/webinars" className="text-sm text-primary hover:opacity-80">
            ← Back to webinars
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          {/* Back link */}
          <Link 
            to="/webinars"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All webinars
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 animate-fade-up">
                <span>{webinar.domainLabel}</span>
                <span>·</span>
                <span className={cn(
                  webinar.status === "upcoming" && "text-primary",
                  webinar.status === "live" && "text-destructive"
                )}>
                  {webinar.status}
                </span>
              </div>

              {/* Title */}
              <h1 className="heading-display mb-6 animate-fade-up stagger-1">
                {webinar.title}
              </h1>

              {/* Description */}
              <p className="text-body-large animate-fade-up stagger-2">
                {webinar.description}
              </p>

              {/* Details */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border text-sm animate-fade-up stagger-3">
                <span className="text-foreground">{webinar.date}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{webinar.time}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{webinar.duration}</span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 p-6 bg-card border border-border rounded-lg animate-fade-up stagger-4">
                {/* Instructor */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <img
                    src={webinar.instructor.avatar}
                    alt={webinar.instructor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{webinar.instructor.name}</p>
                    <p className="text-xs text-muted-foreground">{webinar.instructor.role}</p>
                  </div>
                </div>

                {/* CTA */}
                {webinar.status === "upcoming" ? (
                  <>
                  <button className="w-full py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity mb-3">
                      Register for Free
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      {webinar.spotsLeft && `${webinar.spotsLeft} spots left`}
                    </p>
                  </>
                ) : webinar.status === "completed" ? (
                  <button className="w-full py-2.5 bg-muted text-muted-foreground text-sm font-medium rounded-lg cursor-not-allowed">
                    Completed
                  </button>
                ) : (
                  <button className="w-full py-2.5 bg-destructive text-destructive-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Join Live
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Who this is for */}
              <div className="animate-fade-up">
                <h2 className="text-base font-medium mb-6 text-foreground">Who this is for</h2>
                <ul className="space-y-3">
                  {webinar.targetAudience.map((audience) => (
                    <li key={audience} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you'll learn */}
              <div className="animate-fade-up stagger-1">
                <h2 className="text-base font-medium mb-6 text-foreground">What you'll learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {webinar.outcomes.map((outcome, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-card border border-border rounded-lg"
                    >
                      <span className="text-xs text-muted-foreground mb-2 block">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div className="animate-fade-up stagger-2">
                <h2 className="text-base font-medium mb-6 text-foreground">Session agenda</h2>
                <ol className="space-y-3">
                  {webinar.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-sm">
                      <span className="text-muted-foreground min-w-[1.5rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebinarDetail;
