import { Play, FileText, Headphones, Radio, Video } from "lucide-react";

const futureFeatures = [
  { icon: Video, label: "Video courses" },
  { icon: FileText, label: "Readable guides" },
  { icon: Headphones, label: "Audio content" },
  { icon: Radio, label: "Live programs" },
  { icon: Play, label: "Free content" },
];

export function PlatformPreview() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-background/10 text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A complete learning platform is on the way
            </h2>
            <p className="text-lg text-background/70 mb-8 leading-relaxed">
              We're starting with live webinars to build a community of practical learners. 
              Soon, we'll launch a full platform with multiple learning formats, 
              personalized paths, and a library of practical resources.
            </p>
            
            {/* Feature list */}
            <div className="flex flex-wrap gap-3">
              {futureFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-sm"
                >
                  <feature.icon className="w-4 h-4" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8" />
                </div>
                <p className="text-background/60 text-sm">
                  Platform preview coming soon
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
