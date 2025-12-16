import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Webinar } from "@/data/webinars";

interface WebinarCardProps {
  webinar: Webinar;
  className?: string;
}

const statusStyles = {
  upcoming: "bg-primary/10 text-primary border-primary/20",
  live: "bg-destructive/10 text-destructive border-destructive/20",
  completed: "bg-muted text-muted-foreground border-border",
};

export function WebinarCard({ webinar, className }: WebinarCardProps) {
  return (
    <Link
      to={`/webinars/${webinar.id}`}
      className={cn(
        "group block bg-card rounded-xl p-6 card-hover",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge variant="outline" className="text-xs font-medium">
          {webinar.domainLabel}
        </Badge>
        <Badge 
          variant="outline" 
          className={cn("text-xs font-medium capitalize", statusStyles[webinar.status])}
        >
          {webinar.status}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {webinar.title}
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
          <div className="flex items-center gap-1.5 text-primary">
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
          <p className="text-sm font-medium">{webinar.instructor.name}</p>
          <p className="text-xs text-muted-foreground">{webinar.instructor.role}</p>
        </div>
      </div>
    </Link>
  );
}
