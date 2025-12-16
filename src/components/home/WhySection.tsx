import { Target, Wrench, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "Every session is designed around clear, measurable outcomes. You'll know exactly what you'll be able to do after learning.",
  },
  {
    icon: Wrench,
    title: "Practical Implementation",
    description:
      "We don't just teach theory. Every concept comes with hands-on exercises, templates, and real-world examples you can use immediately.",
  },
  {
    icon: BarChart3,
    title: "Measure Your Progress",
    description:
      "Track your skill development with clear metrics. Know where you started, where you are, and where you're going.",
  },
];

export function WhySection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
            Learning that actually sticks
          </h2>
          <p className="text-lg text-muted-foreground">
            We're building a different kind of learning platform. One where you don't just 
            consume content—you build real skills.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`p-8 rounded-2xl bg-accent/50 border border-border/50 hover:border-primary/20 transition-all animate-fade-up stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
