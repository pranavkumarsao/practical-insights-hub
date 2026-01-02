const futureFeatures = [
  "Video courses",
  "Readable guides", 
  "Audio content",
  "Live programs",
];

export function PlatformPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div className="max-w-md">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
              Coming Soon
            </p>
            <h2 className="heading-section mb-6">
              A complete learning platform
            </h2>
            <p className="text-body mb-8">
              We're starting with live webinars to build a community of practical learners. 
              Soon, we'll launch a full platform with multiple learning formats and personalized paths.
            </p>
            
            {/* Feature list */}
            <ul className="space-y-2">
              {futureFeatures.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-muted-foreground"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-[4/3] bg-card rounded-lg border border-border flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Preview coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
