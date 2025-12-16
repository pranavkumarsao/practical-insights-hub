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
    <section className="py-20 md:py-28 bg-surface-elevated">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Learning that actually sticks
          </h2>
          <p className="text-lg text-muted-foreground">
            We're building a different kind of learning platform. One where you don't just 
            consume content—you build real skills.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center animate-fade-up stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
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
