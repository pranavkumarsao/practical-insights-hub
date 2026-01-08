import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Calendar, Clock, Users, Play, Share2, BookOpen, Target, Award, MessageCircle } from "lucide-react";
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
          <Link to="/webinars" className="btn-link">
            <ArrowLeft className="w-4 h-4" />
            Back to webinars
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Header */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          {/* Back link */}
          <Link 
            to="/webinars"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All webinars
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up">
                <span className="text-xs text-primary uppercase tracking-wider font-medium">{webinar.domainLabel}</span>
                <span 
                  className={cn(
                    "text-xs px-3 py-1 rounded-full font-medium",
                    webinar.status === "upcoming" && "bg-primary/10 text-primary",
                    webinar.status === "live" && "bg-destructive/10 text-destructive",
                    webinar.status === "completed" && "bg-muted text-muted-foreground"
                  )}
                >
                  {webinar.status === "upcoming" ? "Upcoming" : webinar.status === "live" ? "Live Now" : "Completed"}
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

              {/* Details Row */}
              <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[hsl(var(--glass-border))] text-sm animate-fade-up stagger-3">
                <span className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {webinar.date}
                </span>
                <span className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {webinar.time}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Play className="w-4 h-4" />
                  {webinar.duration}
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 glass-card p-6 animate-fade-up stagger-4">
                {/* Instructor */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[hsl(var(--glass-border))]">
                  <img
                    src={webinar.instructor.avatar}
                    alt={webinar.instructor.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{webinar.instructor.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{webinar.instructor.role}</p>
                  </div>
                </div>

                {/* Session Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-[hsl(var(--glass-border))]">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Format</span>
                    <span className="text-foreground">Live + Q&A</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level</span>
                    <span className="text-foreground">All Levels</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Recording</span>
                    <span className="text-foreground">Included</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Access</span>
                    <span className="text-primary font-medium">Limited Seats</span>
                  </div>
                </div>

                {/* CTA */}
                {webinar.status === "upcoming" ? (
                  <>
                    <button className="btn-primary w-full mb-3">
                      Register Now
                    </button>
                    {webinar.spotsLeft && (
                      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        Only {webinar.spotsLeft} spots remaining
                      </p>
                    )}
                  </>
                ) : webinar.status === "completed" ? (
                  <button className="w-full py-3 bg-muted text-muted-foreground text-sm font-medium rounded-lg cursor-not-allowed">
                    Session Completed
                  </button>
                ) : (
                  <button className="w-full py-3 bg-destructive text-destructive-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    Join Live Now
                  </button>
                )}

                {/* Share */}
                <button className="w-full flex items-center justify-center gap-2 mt-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share this webinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-20 md:pb-28 border-t border-[hsl(var(--glass-border))] pt-16 md:pt-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-12 md:space-y-16">
              {/* Who this is for */}
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-medium text-foreground">Who this is for</h2>
                </div>
                <ul className="space-y-3">
                  {webinar.targetAudience.map((audience) => (
                    <li key={audience} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you'll learn */}
              <div className="animate-fade-up stagger-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-medium text-foreground">What you'll learn</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {webinar.outcomes.map((outcome, index) => (
                    <div 
                      key={index}
                      className="glass-card p-4 hover:bg-[hsl(var(--glass-bg))] transition-colors"
                    >
                      <span className="text-xs text-primary mb-2 block font-medium">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm text-foreground leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div className="animate-fade-up stagger-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-medium text-foreground">Session agenda</h2>
                </div>
                <div className="glass-card overflow-hidden">
                  {webinar.agenda.map((item, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "flex items-start gap-4 p-4 text-sm",
                        index !== webinar.agenda.length - 1 && "border-b border-[hsl(var(--glass-border))]"
                      )}
                    >
                      <span className="text-xs text-primary min-w-[1.5rem] font-medium pt-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="animate-fade-up stagger-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-medium text-foreground">What to expect</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-medium text-foreground mb-1">Live</p>
                    <p className="text-xs text-muted-foreground">Interactive Session</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-medium text-foreground mb-1">Q&A</p>
                    <p className="text-xs text-muted-foreground">Direct Access</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <p className="text-2xl font-medium text-foreground mb-1">Recording</p>
                    <p className="text-xs text-muted-foreground">Lifetime Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - empty to maintain alignment with sticky sidebar */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-wide">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="heading-section mb-4">Ready to learn?</h2>
            <p className="text-body max-w-md mx-auto mb-8">
              Join this session and start building practical skills you can apply immediately.
            </p>
            {webinar.status === "upcoming" ? (
              <button className="btn-primary">
                Register Now
              </button>
            ) : webinar.status === "live" ? (
              <button className="btn-primary bg-destructive hover:bg-destructive/90">
                Join Live Now
              </button>
            ) : (
              <Link to="/webinars" className="btn-primary">
                Explore Other Webinars
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebinarDetail;
