import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { WebinarCard } from "@/components/webinar/WebinarCard";
import { Button } from "@/components/ui/button";
import { webinars, domainLabels, type WebinarDomain } from "@/data/webinars";
import { cn } from "@/lib/utils";

type FilterOption = "all" | WebinarDomain;

const filterOptions: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All Domains" },
  { value: "design-genai", label: "Design + GenAI" },
  { value: "gtm", label: "Go-To-Market" },
  { value: "growth", label: "Growth" },
  { value: "automation-genai", label: "Automation & GenAI" },
];

const Webinars = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredWebinars = activeFilter === "all" 
    ? webinars 
    : webinars.filter((w) => w.domain === activeFilter);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-surface-elevated">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-up">
              Webinars
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up stagger-1">
              Live, interactive sessions with industry practitioners. Each webinar is designed 
              for immediate implementation with clear, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-12 md:py-16">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up stagger-2">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(option.value)}
                className={cn(
                  "transition-all",
                  activeFilter === option.value && "shadow-md"
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredWebinars.length} webinar{filteredWebinars.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebinars.map((webinar, index) => (
              <WebinarCard 
                key={webinar.id} 
                webinar={webinar}
                className={`animate-fade-up stagger-${Math.min(index + 1, 5)}`}
              />
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No webinars found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Webinars;
