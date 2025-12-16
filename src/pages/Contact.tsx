import { useState } from "react";
import { Mail, MessageSquare, HelpCircle, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Are webinars free?",
    answer: "Yes, all our live webinars are currently free to attend. We believe in demonstrating value before asking for anything in return.",
  },
  {
    question: "Will sessions be recorded?",
    answer: "Yes, registered participants will receive access to the recording after the session. However, we encourage live attendance for the interactive Q&A.",
  },
  {
    question: "What if I can't attend live?",
    answer: "You can still register and you'll receive the recording. Some interactive elements work best live, but the core content will be available.",
  },
  {
    question: "How do I prepare for a webinar?",
    answer: "Each webinar page lists prerequisites if any. Generally, come with an open mind and be ready to take notes. Some sessions have pre-work that's optional but recommended.",
  },
  {
    question: "When will the full platform launch?",
    answer: "We're planning to launch our learning platform beta in Q2 2025. Sign up for our newsletter or attend a webinar to stay updated.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-surface-elevated">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-up">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up stagger-1">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Send us a message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Tell us more..."
                    className="min-h-[150px] resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer email? Reach us directly at
                </p>
                <a 
                  href="mailto:hello@thepracticalworld.com"
                  className="text-primary hover:underline font-medium"
                >
                  hello@thepracticalworld.com
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="animate-fade-up stagger-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Frequently asked</h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium pr-4">{faq.question}</span>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                        openFaq === index && "rotate-180"
                      )} />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional help */}
              <div className="mt-8 p-6 rounded-xl bg-surface-elevated">
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? Send us a message and we'll 
                  get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
