import { Video, FileText, Headphones, Users } from "lucide-react";

const futureFeatures = [
  { icon: Video, label: "Video courses" },
  { icon: FileText, label: "Readable guides" },
  { icon: Headphones, label: "Audio content" },
  { icon: Users, label: "Live programs" },
];

export function PlatformPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-[hsl(var(--glass-border))]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div className="max-w-md">
            <p className="text-xs text-primary uppercase tracking-wider mb-4">
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
            <ul className="space-y-3">
              {futureFeatures.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-[4/3] glass-card flex items-center justify-center">
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