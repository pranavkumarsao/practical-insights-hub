import { Target, Wrench, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Outcome-focused",
    description:
      "Every session is designed around clear, measurable outcomes. You'll know exactly what you'll be able to do after.",
  },
  {
    icon: Wrench,
    title: "Practical implementation",
    description:
      "We don't teach theory alone. Every concept comes with hands-on exercises and real-world examples you can use immediately.",
  },
  {
    icon: TrendingUp,
    title: "Measure your progress",
    description:
      "Track your skill development with clear metrics. Know where you started, where you are, and where you're going.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 border-t border-[hsl(var(--glass-border))]">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-12 md:mb-16">
          <h2 className="heading-section mb-4">
            Learning that actually sticks
          </h2>
          <p className="text-body">
            We're building a different kind of learning platform. One where you don't just 
            consume content. You build real skills.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`glass-card p-6 animate-fade-up stagger-${index + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-normal mb-3 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}