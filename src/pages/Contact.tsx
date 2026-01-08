import { useState } from "react";
import { ChevronDown, Send, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do webinars work?",
    answer: "Our webinars are live, interactive sessions led by industry practitioners. You'll learn practical skills and get direct access to Q&A with the instructor.",
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/thepracticalworld",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thepracticalworld",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/thepracticalworld",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
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
              <h2 className="text-base font-medium mb-6 text-foreground">Send a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-muted-foreground">Name</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="Your name" 
                      className="h-11 bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] focus:border-primary/50 transition-colors backdrop-blur-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder="you@example.com" 
                      className="h-11 bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] focus:border-primary/50 transition-colors backdrop-blur-sm" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm text-muted-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    required 
                    placeholder="What's this about?" 
                    className="h-11 bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] focus:border-primary/50 transition-colors backdrop-blur-sm" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Tell us more..."
                    className="min-h-[120px] resize-none bg-[hsl(var(--glass-bg))] border-[hsl(var(--glass-border))] focus:border-primary/50 transition-colors backdrop-blur-sm"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-[hsl(var(--glass-border))]">
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer email?
                </p>
                <a 
                  href="mailto:hello@thepracticalworld.com"
                  className="btn-link"
                >
                  <Mail className="w-4 h-4" />
                  hello@thepracticalworld.com
                </a>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us
                  </p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                        <span className="text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="animate-fade-up stagger-2">
              <h2 className="text-base font-medium mb-6 text-foreground">Frequently asked</h2>

              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="glass-card overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[hsl(var(--glass-bg))] transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
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
