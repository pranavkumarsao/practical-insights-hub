const features = [
  {
    title: "Outcome-focused",
    description:
      "Every session is designed around clear, measurable outcomes. You'll know exactly what you'll be able to do after.",
  },
  {
    title: "Practical implementation",
    description:
      "We don't teach theory alone. Every concept comes with hands-on exercises and real-world examples you can use immediately.",
  },
  {
    title: "Measure your progress",
    description:
      "Track your skill development with clear metrics. Know where you started, where you are, and where you're going.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="heading-section mb-4">
            Learning that actually sticks
          </h2>
          <p className="text-body">
            We're building a different kind of learning platform. One where you don't just 
            consume content. You build real skills.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`animate-fade-up stagger-${index + 1}`}
            >
              <h3 className="text-base font-medium mb-3 text-foreground">{feature.title}</h3>
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
