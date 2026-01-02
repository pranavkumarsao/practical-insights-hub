import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { WebinarCard } from "@/components/webinar/WebinarCard";
import { webinars, type WebinarDomain } from "@/data/webinars";
import { cn } from "@/lib/utils";

type FilterOption = "all" | WebinarDomain;

const filterOptions: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "design-genai", label: "Design + GenAI" },
  { value: "gtm", label: "Go-To-Market" },
  { value: "growth", label: "Growth" },
  { value: "automation-genai", label: "Automation" },
];

const Webinars = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredWebinars = activeFilter === "all" 
    ? webinars 
    : webinars.filter((w) => w.domain === activeFilter);

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-xl">
            <h1 className="heading-display mb-4 animate-fade-up">
              Webinars
            </h1>
            <p className="text-body-large animate-fade-up stagger-1">
              Live, interactive sessions designed for immediate implementation 
              with clear, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border animate-fade-up stagger-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-colors",
                  activeFilter === option.value
                    ? "bg-card text-foreground border border-border"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-8">
            {filteredWebinars.length} webinar{filteredWebinars.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                No webinars found. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Webinars;
