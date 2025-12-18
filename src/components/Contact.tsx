import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Message Sent Successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch (err) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Great Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a Unity project in mind? We'd love to hear about it. Get in touch and let's make it happen.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Your Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="pl-10 bg-card border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="pl-10 bg-card border-border focus:border-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Project Type Field */}
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-foreground">
                Project Type
              </Label>
              <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                <SelectTrigger className="bg-card border-border focus:border-primary">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="game">Game Development</SelectItem>
                  <SelectItem value="ar-vr">AR/VR Solution</SelectItem>
                  <SelectItem value="monetization">Ads & Monetization</SelectItem>
                  <SelectItem value="optimization">Optimization & Consulting</SelectItem>
                  <SelectItem value="backend">Backend Integration</SelectItem>
                  <SelectItem value="tools">Custom Tools & Extensions</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Project Details
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, timeline, and goals..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="pl-10 min-h-[150px] bg-card border-border focus:border-primary resize-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2" size={20} />
                </>
              )}
            </Button>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Prefer email? Reach us directly at
            </p>
            <a
              href="mailto:contact@immernova.com"
              className="text-primary hover:text-primary-glow font-semibold text-lg transition-colors"
            >
              contact@immernova.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
