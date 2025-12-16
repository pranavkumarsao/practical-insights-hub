import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Users, Rocket } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    phase: "Now",
    title: "Live Webinars",
    description: "Domain-specific webinars with industry practitioners. Interactive, practical, and immediately applicable.",
    status: "active",
  },
  {
    phase: "Q2 2025",
    title: "Learning Platform Beta",
    description: "Video courses, readable guides, and audio content. Multiple learning formats for different preferences.",
    status: "upcoming",
  },
  {
    phase: "Q3 2025",
    title: "Full Platform Launch",
    description: "Complete learning ecosystem with live programs, community features, and personalized learning paths.",
    status: "upcoming",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-surface-elevated">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-up">
              About The Practical World
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up stagger-1">
              We're building the learning platform we wished existed when we were starting our careers—
              one that focuses on what actually matters: practical skills that create real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To transform how professionals learn by making education practical, measurable, 
                and immediately applicable. No more passive consumption—only active skill building.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe everyone deserves access to quality education that actually prepares them 
                for real-world challenges. Not certificates that collect dust, but skills that open doors.
              </p>
            </div>

            <div className="space-y-6 animate-fade-up stagger-2">
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Vision</h3>
                <p className="text-muted-foreground">
                  A world where learning is synonymous with doing—where every hour invested 
                  in education translates directly to professional capability.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We're building a community of practitioners who learn by doing, share what works, 
                  and help each other grow professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-surface-elevated">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Why we're building this
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                We've sat through countless courses, completed dozens of certificates, and spent 
                thousands of hours consuming educational content. The pattern was always the same: 
                inspiring content, zero implementation, forgotten within weeks.
              </p>
              <p>
                The problem wasn't motivation or intelligence. The problem was that traditional 
                education is designed for consumption, not application. Theory without practice 
                is just entertainment dressed up as learning.
              </p>
              <p>
                The Practical World is our answer to this broken model. We're building learning 
                experiences where implementation is mandatory, outcomes are measurable, and 
                every concept is tied to real-world application.
              </p>
              <p className="font-medium text-foreground">
                Because learning should change what you can do, not just what you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What's ahead
            </h2>
            <p className="text-lg text-muted-foreground">
              We're starting focused and expanding thoughtfully. Here's our roadmap.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.phase}
                  className={`relative flex gap-6 animate-fade-up stagger-${Math.min(index + 1, 3)}`}
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.status === "active" ? "bg-primary" : "bg-border"
                    }`} />
                    {index < milestones.length - 1 && (
                      <div className="w-[2px] h-full bg-border mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 ${
                    milestone.status === "active" 
                      ? "bg-primary/5 -ml-4 pl-10 pr-6 py-6 rounded-xl border border-primary/10" 
                      : ""
                  }`}>
                    <span className={`text-sm font-medium ${
                      milestone.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {milestone.phase}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container-tight text-center">
          <Rocket className="w-12 h-12 mx-auto mb-6 text-background/60" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join us from the beginning
          </h2>
          <p className="text-lg text-background/70 max-w-xl mx-auto mb-8">
            Be part of our founding community. Get early access to new features and help 
            shape the future of practical learning.
          </p>
          <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/webinars">
              Explore Webinars
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
