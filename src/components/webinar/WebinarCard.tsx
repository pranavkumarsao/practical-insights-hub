import { Link } from "react-router-dom";
import { Calendar, Clock, Users, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Webinar } from "@/data/webinars";

interface WebinarCardProps {
  webinar: Webinar;
  className?: string;
}

const statusStyles = {
  upcoming: "bg-primary/10 text-primary",
  live: "bg-destructive/10 text-destructive",
  completed: "bg-muted text-muted-foreground",
};

export function WebinarCard({ webinar, className }: WebinarCardProps) {
  return (
    <Link
      to={`/webinars/${webinar.id}`}
      className={cn(
        "group block bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] transition-all",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge variant="secondary" className="text-xs font-medium rounded-full">
          {webinar.domainLabel}
        </Badge>
        <Badge 
          className={cn("text-xs font-medium capitalize rounded-full border-0", statusStyles[webinar.status])}
        >
          {webinar.status === "live" && <span className="w-2 h-2 rounded-full bg-destructive mr-1.5 animate-pulse" />}
          {webinar.status}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
        {webinar.title}
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {webinar.description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{webinar.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{webinar.duration}</span>
        </div>
        {webinar.spotsLeft && webinar.status === "upcoming" && (
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <Users className="w-4 h-4" />
            <span>{webinar.spotsLeft} spots left</span>
          </div>
        )}
      </div>

      {/* Instructor */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <img
          src={webinar.instructor.avatar}
          alt={webinar.instructor.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{webinar.instructor.name}</p>
          <p className="text-xs text-muted-foreground">{webinar.instructor.role}</p>
        </div>
      </div>
    </Link>
  );
}
