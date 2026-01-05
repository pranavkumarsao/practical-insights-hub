import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Webinar } from "@/data/webinars";

interface WebinarCardProps {
  webinar: Webinar;
  className?: string;
}

export function WebinarCard({ webinar, className }: WebinarCardProps) {
  return (
    <Link
      to={`/webinars/${webinar.id}`}
      className={cn(
        "group block p-6 glass-card hover:border-primary/20 transition-all",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-xs text-primary uppercase tracking-wider">
          {webinar.domainLabel}
        </span>
        <span 
          className={cn(
            "text-xs px-2 py-0.5 rounded-full",
            webinar.status === "upcoming" && "bg-primary/10 text-primary",
            webinar.status === "live" && "bg-destructive/10 text-destructive",
            webinar.status === "completed" && "bg-muted text-muted-foreground"
          )}
        >
          {webinar.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="heading-card mb-2 group-hover:text-primary transition-colors">
        {webinar.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
        {webinar.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {webinar.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {webinar.duration}
        </span>
      </div>

      {/* Instructor */}
      <div className="flex items-center gap-3 pt-4 border-t border-[hsl(var(--glass-border))]">
        <img
          src={webinar.instructor.avatar}
          alt={webinar.instructor.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{webinar.instructor.name}</p>
          <p className="text-xs text-muted-foreground">{webinar.instructor.role}</p>
        </div>
      </div>
    </Link>
  );
}