export type WebinarStatus = "upcoming" | "live" | "completed";
export type WebinarDomain = "design-genai" | "gtm" | "growth" | "automation-genai";

export interface Webinar {
  id: string;
  title: string;
  description: string;
  domain: WebinarDomain;
  domainLabel: string;
  date: string;
  time: string;
  duration: string;
  status: WebinarStatus;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  outcomes: string[];
  agenda: string[];
  targetAudience: string[];
  spotsLeft?: number;
}

export const domainLabels: Record<WebinarDomain, string> = {
  "design-genai": "Design + GenAI",
  "gtm": "Go-To-Market",
  "growth": "Growth",
  "automation-genai": "Automation & GenAI",
};

export const webinars: Webinar[] = [
  {
    id: "design-systems-ai",
    title: "Building Design Systems with AI Assistance",
    description: "Learn how to leverage AI tools to create scalable, consistent design systems that accelerate your product development workflow.",
    domain: "design-genai",
    domainLabel: "Design + GenAI",
    date: "January 15, 2025",
    time: "6:00 PM IST",
    duration: "90 minutes",
    status: "upcoming",
    instructor: {
      name: "Priya Sharma",
      role: "Design Lead, Former Figma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    outcomes: [
      "Create AI-powered design tokens",
      "Build component libraries 3x faster",
      "Implement design-to-code workflows",
      "Set up automated design QA",
    ],
    agenda: [
      "Introduction to AI in design systems",
      "Hands-on: Setting up your AI toolkit",
      "Building your first AI-assisted component library",
      "Integration with development workflows",
      "Q&A and next steps",
    ],
    targetAudience: [
      "Product designers",
      "UX engineers",
      "Design system maintainers",
    ],
    spotsLeft: 23,
  },
  {
    id: "gtm-b2b-saas",
    title: "Go-To-Market Strategy for B2B SaaS",
    description: "A practical framework for launching and scaling B2B SaaS products, from positioning to first 100 customers.",
    domain: "gtm",
    domainLabel: "Go-To-Market",
    date: "January 22, 2025",
    time: "7:00 PM IST",
    duration: "120 minutes",
    status: "upcoming",
    instructor: {
      name: "Arjun Menon",
      role: "GTM Advisor, Ex-Freshworks",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    outcomes: [
      "Define your ICP with precision",
      "Craft compelling positioning",
      "Build repeatable sales playbooks",
      "Set up metrics that matter",
    ],
    agenda: [
      "Understanding B2B SaaS GTM fundamentals",
      "ICP definition workshop",
      "Positioning and messaging framework",
      "Channel strategy and prioritization",
      "Building your GTM dashboard",
    ],
    targetAudience: [
      "Startup founders",
      "Product marketers",
      "Early-stage GTM leads",
    ],
    spotsLeft: 15,
  },
  {
    id: "growth-loops",
    title: "Designing Growth Loops That Scale",
    description: "Move beyond one-off tactics. Learn to build sustainable growth engines using proven loop frameworks.",
    domain: "growth",
    domainLabel: "Growth",
    date: "January 29, 2025",
    time: "6:30 PM IST",
    duration: "90 minutes",
    status: "upcoming",
    instructor: {
      name: "Neha Kapoor",
      role: "Growth Partner, Sequoia Surge",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    outcomes: [
      "Identify your core growth loops",
      "Build acquisition and retention flywheels",
      "Measure loop efficiency",
      "Scale what works systematically",
    ],
    agenda: [
      "Growth loops vs. funnels: A paradigm shift",
      "Types of growth loops",
      "Workshop: Mapping your product's loops",
      "Optimization and measurement",
      "Case studies and learnings",
    ],
    targetAudience: [
      "Growth marketers",
      "Product managers",
      "Startup operators",
    ],
    spotsLeft: 31,
  },
  {
    id: "workflow-automation",
    title: "No-Code Workflow Automation with AI",
    description: "Automate repetitive tasks and build intelligent workflows without writing code. Practical, hands-on session.",
    domain: "automation-genai",
    domainLabel: "Automation & GenAI",
    date: "February 5, 2025",
    time: "6:00 PM IST",
    duration: "120 minutes",
    status: "upcoming",
    instructor: {
      name: "Vikram Singh",
      role: "Automation Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    outcomes: [
      "Build end-to-end automated workflows",
      "Integrate AI into existing processes",
      "Create intelligent decision trees",
      "Save 10+ hours per week",
    ],
    agenda: [
      "The automation opportunity",
      "Tools overview: Make, Zapier, n8n",
      "Hands-on: Building your first workflow",
      "Adding AI intelligence",
      "Scaling and monitoring",
    ],
    targetAudience: [
      "Operations professionals",
      "Business analysts",
      "Anyone doing repetitive work",
    ],
    spotsLeft: 42,
  },
];
