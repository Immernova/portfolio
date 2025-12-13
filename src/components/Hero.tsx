import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Unity Development Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(190 95% 50% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(190 95% 50% / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-slow">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Build Exceptional{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Unity Experiences
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From immersive AR/VR to optimized mobile games — we deliver performance, creativity, and results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 animate-glow-pulse"
            >
              Work With Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            >
              View Projects
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="hidden lg:block absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float" 
               style={{ animationDelay: '0s' }} />
          <div className="hidden lg:block absolute bottom-1/4 right-10 w-16 h-16 border-2 border-accent/30 rotate-45 animate-float" 
               style={{ animationDelay: '2s' }} />
          <div className="hidden lg:block absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float blur-sm" 
               style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
