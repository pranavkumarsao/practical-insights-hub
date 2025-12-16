import { BookOpen, Code, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    description:
      "Engage with focused, practical content designed by industry practitioners. No filler, just what you need to know.",
  },
  {
    number: "02",
    icon: Code,
    title: "Apply",
    description:
      "Put your learning into practice immediately with guided exercises, real projects, and hands-on implementation.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Measure",
    description:
      "Track your progress with clear metrics. See tangible improvements in your skills and outcomes.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-accent/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Our Process</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
            How learning works here
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, proven framework that ensures you don't just learn—you transform.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative animate-fade-up stagger-${index + 1}`}
            >
              <div className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all h-full">
                {/* Number */}
                <span className="text-7xl font-bold text-primary/10 absolute top-4 right-6">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
