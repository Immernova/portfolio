import { Code, Zap, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '7+' },
    { icon: Award, label: 'Projects Delivered', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Zap, label: 'Performance Boost', value: '40%' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Who <span className="bg-gradient-primary bg-clip-text text-transparent">We Are</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a specialized Unity development studio passionate about creating 
                exceptional interactive experiences. With deep expertise in Unity3D and 
                cross-platform development, we transform ambitious ideas into polished, 
                performance-optimized products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From immersive AR/VR experiences to mobile games that scale to millions of users, 
                we help studios and startups bring their vision to life with technical excellence 
                and creative innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team specializes in performance optimization, backend integration, 
                and custom Unity tools that make development faster and more efficient. 
                We don't just build games — we engineer experiences that perform flawlessly 
                across all platforms.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-primary mb-4" size={32} />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
