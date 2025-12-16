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
    <section className="py-20 md:py-28">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How learning works here
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, proven framework that ensures you don't just learn—you transform.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative animate-fade-up stagger-${index + 1}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-[1px] bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-8 border border-border">
                {/* Number */}
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
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
