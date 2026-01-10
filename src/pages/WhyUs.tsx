import { Link } from "react-router-dom";
import { ArrowRight, X, Check, Target, Wrench, BarChart3, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const differences = [
  {
    traditional: "Theory-heavy curriculum",
    practical: "Outcome-focused learning",
  },
  {
    traditional: "Passive video consumption",
    practical: "Active implementation",
  },
  {
    traditional: "Generic, one-size-fits-all",
    practical: "Domain-specific expertise",
  },
  {
    traditional: "No real-world application",
    practical: "Immediate practical use",
  },
  {
    traditional: "Vanity completion metrics",
    practical: "Measurable skill outcomes",
  },
];

const values = [
  {
    icon: Target,
    title: "Clarity over complexity",
    description: "We cut through the noise. Every learning module has a clear, measurable outcome.",
  },
  {
    icon: Wrench,
    title: "Practice over theory",
    description: "Learning without implementation is entertainment. We ensure you build real skills.",
  },
  {
    icon: BarChart3,
    title: "Progress over perfection",
    description: "Small, consistent improvements compound. We help you measure and celebrate progress.",
  },
  {
    icon: Zap,
    title: "Speed over speculation",
    description: "The faster you apply, the faster you learn. Our content is designed for immediate use.",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-display mb-6 animate-fade-up">
              Why The Practical World?
            </h1>
            <p className="text-body-large animate-fade-up stagger-1">
              We're not another ed-tech platform with hours of video content you'll never finish. 
              We're building something different. Learning that's actually useful.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-wide">
          <h2 className="heading-section mb-10 md:mb-12 text-center">
            Traditional Ed-Tech vs. Practical World
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Traditional</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-primary">Practical World</span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {differences.map((diff, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-2 gap-3 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
                >
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[hsl(var(--glass-bg))] border border-[hsl(var(--glass-border))]">
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{diff.traditional}</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{diff.practical}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="heading-section mb-4">
              Our learning philosophy
            </h2>
            <p className="text-body">
              Simple principles that guide how we design every learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`glass-card p-6 animate-fade-up stagger-${Math.min(index + 1, 4)}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-normal mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-[hsl(var(--glass-border))]">
        <div className="container-tight text-center">
          <h2 className="heading-section mb-4">
            Experience the difference
          </h2>
          <p className="text-body max-w-xl mx-auto mb-8">
            Join one of our upcoming webinars and see practical learning in action.
          </p>
          <Link to="/webinars" className="btn-primary">
            Explore Webinars
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;