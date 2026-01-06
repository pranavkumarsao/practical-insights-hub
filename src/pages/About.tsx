import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Lightbulb, Users } from "lucide-react";

const milestones = [
  {
    phase: "Now",
    title: "Live Webinars",
    description: "Domain-specific webinars with industry practitioners. Interactive, practical, immediately applicable.",
    active: true,
  },
  {
    phase: "Q2 2026",
    title: "Learning Platform Beta",
    description: "Video courses, readable guides, and audio content. Multiple formats for different preferences.",
    active: false,
  },
  {
    phase: "Q3 2026",
    title: "Full Platform Launch",
    description: "Complete learning ecosystem with community features and personalized learning paths.",
    active: false,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="heading-display mb-6 animate-fade-up">
              About
            </h1>
            <p className="text-body-large animate-fade-up stagger-1">
              We're building the learning platform we wished existed. One that focuses on 
              practical skills that create real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="animate-fade-up">
              <h2 className="heading-section mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-body">
                <p>
                  To transform how professionals learn by making education practical, 
                  measurable, and immediately applicable.
                </p>
                <p>
                  We believe everyone deserves access to quality education that actually 
                  prepares them for real-world challenges. Not certificates that collect 
                  dust, but skills that open doors.
                </p>
              </div>
            </div>

            <div className="space-y-4 animate-fade-up stagger-2">
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2 text-foreground">Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A world where learning is synonymous with doing. Where every hour invested 
                  translates directly to professional capability.
                </p>
              </div>
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2 text-foreground">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're building a community of practitioners who learn by doing, share 
                  what works, and help each other grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-section mb-8 text-center">
              Why we're building this
            </h2>
            <div className="space-y-4 text-body">
              <p>
                We've sat through countless courses, completed dozens of certificates, 
                and spent thousands of hours consuming educational content. The pattern 
                was always the same: inspiring content, zero implementation, forgotten 
                within weeks.
              </p>
              <p>
                The problem wasn't motivation or intelligence. The problem was that 
                traditional education is designed for consumption, not application.
              </p>
              <p>
                The Practical World is our answer. Learning experiences where implementation 
                is mandatory, outcomes are measurable, and every concept is tied to 
                real-world application.
              </p>
              <p className="font-medium text-foreground">
                Because learning should change what you can do, not just what you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <h2 className="heading-section mb-4">
              What's ahead
            </h2>
            <p className="text-body">
              We're starting focused and expanding thoughtfully.
            </p>
          </div>

          <div className="max-w-xl">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.phase}
                  className={`glass-card p-6 border-l-2 ${milestone.active ? 'border-l-primary' : 'border-l-transparent'} animate-fade-up stagger-${Math.min(index + 1, 3)}`}
                >
                  <span className={`text-xs ${milestone.active ? 'text-primary' : 'text-muted-foreground'}`}>
                    {milestone.phase}
                  </span>
                  <h3 className="text-base font-medium mt-1 mb-2 text-foreground">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-tight text-center">
          <h2 className="heading-section mb-4">
            Join us from the beginning
          </h2>
          <p className="text-body max-w-md mx-auto mb-8">
            Be part of our founding community. Get early access and help shape the 
            future of practical learning.
          </p>
          <Link 
            to="/webinars"
            className="btn-primary"
          >
            Explore Webinars
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;