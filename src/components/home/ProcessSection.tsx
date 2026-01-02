const steps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Engage with focused, practical content designed by industry practitioners. No filler, just what you need to know.",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Put your learning into practice immediately with guided exercises, real projects, and hands-on implementation.",
  },
  {
    number: "03",
    title: "Measure",
    description:
      "Track your progress with clear metrics. See tangible improvements in your skills and outcomes.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="heading-section mb-4">
            How learning works here
          </h2>
          <p className="text-body">
            A simple, proven framework that ensures you don't just learn—you transform.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative animate-fade-up stagger-${index + 1}`}
            >
              {/* Number */}
              <span className="text-xs text-muted-foreground mb-4 block">
                {step.number}
              </span>
              
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
