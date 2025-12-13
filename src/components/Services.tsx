import { Gamepad2, Glasses, DollarSign, Cloud, Settings, Puzzle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Cross-platform 2D & 3D games built with Unity. From casual mobile to complex PC/console titles.',
      gradient: 'from-primary to-primary-glow',
    },
    {
      icon: Glasses,
      title: 'AR/VR Solutions',
      description: 'Immersive experiences for Oculus, Quest, ARKit, and ARCore with optimized performance.',
      gradient: 'from-accent to-purple-500',
    },
    {
      icon: DollarSign,
      title: 'Ads & Monetization',
      description: 'Strategic implementation of Unity Ads, AdMob, and in-app purchases to maximize revenue.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cloud,
      title: 'Backend Integration',
      description: 'Seamless connection with AWS, PlayFab, Firebase, and custom REST APIs for scalable solutions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'Optimization & Consulting',
      description: 'Performance tuning, profiling, and code review to ensure your Unity project runs flawlessly.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Puzzle,
      title: 'Custom Tools & Extensions',
      description: 'Tailored Unity Editor tools and plugins to streamline your development workflow.',
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Unity development services to bring your interactive vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Need something specific? We offer custom Unity solutions tailored to your needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:text-primary-glow font-semibold text-lg underline underline-offset-4 transition-colors"
            >
              Let's discuss your project →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
