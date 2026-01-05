import { BookOpen, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    number: "01",
    title: "Learn",
    description:
      "Engage with focused, practical content designed by industry practitioners. No filler, just what you need to know.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Apply",
    description:
      "Put your learning into practice immediately with guided exercises, real projects, and hands-on implementation.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Measure",
    description:
      "Track your progress with clear metrics. See tangible improvements in your skills and outcomes.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 glass-surface">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="heading-section mb-4">
            How learning works here
          </h2>
          <p className="text-body">
            A simple, proven framework that ensures you don't just learn. You transform.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative glass-card p-6 animate-fade-up stagger-${index + 1}`}
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-base font-medium mb-3 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}