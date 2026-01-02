import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Are webinars free?",
    answer: "Yes, all our live webinars are currently free. We believe in demonstrating value before asking for anything in return.",
  },
  {
    question: "Will sessions be recorded?",
    answer: "Yes, registered participants receive access to the recording. However, we encourage live attendance for the interactive Q&A.",
  },
  {
    question: "What if I can't attend live?",
    answer: "You can still register and receive the recording. Some interactive elements work best live, but the core content will be available.",
  },
  {
    question: "When will the full platform launch?",
    answer: "We're planning to launch our learning platform beta in Q2 2025. Attend a webinar to stay updated.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-xl">
            <h1 className="heading-display mb-4 animate-fade-up">
              Contact
            </h1>
            <p className="text-body-large animate-fade-up stagger-1">
              Have a question? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="text-lg font-medium mb-6">Send a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Name</Label>
                    <Input id="name" required placeholder="Your name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" className="h-11" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">Subject</Label>
                  <Input id="subject" required placeholder="What's this about?" className="h-11" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Tell us more..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Prefer email?
                </p>
                <a 
                  href="mailto:hello@thepracticalworld.com"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  hello@thepracticalworld.com
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="animate-fade-up stagger-2">
              <h2 className="text-lg font-medium mb-6">Frequently asked</h2>

              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-border rounded-md overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm font-medium pr-4">{faq.question}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 text-muted-foreground transition-transform flex-shrink-0",
                        openFaq === index && "rotate-180"
                      )} />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
