import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, Users, ArrowLeft, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { webinars } from "@/data/webinars";
import { cn } from "@/lib/utils";

const statusStyles = {
  upcoming: "bg-primary/10 text-primary border-primary/20",
  live: "bg-destructive/10 text-destructive border-destructive/20",
  completed: "bg-muted text-muted-foreground border-border",
};

const WebinarDetail = () => {
  const { id } = useParams();
  const webinar = webinars.find((w) => w.id === id);

  if (!webinar) {
    return (
      <Layout>
        <div className="container-wide py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Webinar not found</h1>
          <Button asChild variant="outline">
            <Link to="/webinars">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to webinars
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-20 bg-surface-elevated">
        <div className="container-wide">
          {/* Back link */}
          <Link 
            to="/webinars"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to webinars
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4 animate-fade-up">
                <Badge variant="outline">{webinar.domainLabel}</Badge>
                <Badge 
                  variant="outline" 
                  className={cn("capitalize", statusStyles[webinar.status])}
                >
                  {webinar.status}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-up stagger-1">
                {webinar.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up stagger-2">
                {webinar.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span>{webinar.time} · {webinar.duration}</span>
                </div>
                {webinar.spotsLeft && webinar.status === "upcoming" && (
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="w-5 h-5" />
                    <span>{webinar.spotsLeft} spots left</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Registration Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-up stagger-4">
                {/* Instructor */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <img
                    src={webinar.instructor.avatar}
                    alt={webinar.instructor.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{webinar.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">{webinar.instructor.role}</p>
                  </div>
                </div>

                {/* CTA */}
                {webinar.status === "upcoming" ? (
                  <>
                    <Button className="w-full mb-3" size="lg">
                      Register Now — Free
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Limited spots available. No payment required.
                    </p>
                  </>
                ) : webinar.status === "completed" ? (
                  <Button className="w-full" size="lg" variant="outline" disabled>
                    Webinar Completed
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" variant="destructive">
                    Join Live Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Target Audience */}
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-6">Who this is for</h2>
                <ul className="space-y-3">
                  {webinar.targetAudience.map((audience) => (
                    <li key={audience} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="animate-fade-up stagger-1">
                <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {webinar.outcomes.map((outcome, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-surface-elevated"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div className="animate-fade-up stagger-2">
                <h2 className="text-2xl font-bold mb-6">Session Agenda</h2>
                <ol className="space-y-4">
                  {webinar.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-sm font-medium text-muted-foreground min-w-[2rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
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
