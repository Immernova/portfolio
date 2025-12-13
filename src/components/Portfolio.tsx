import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projectArGame from '@/assets/project-ar-shopping-assistant.jpg';
import projectVrExperience from '@/assets/project-vr-training-expansion-lockout.jpg';
import projectCrowdLegends from '@/assets/project-crowd-legends.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AR Shopping Assistant',
      category: 'Augmented Reality',
      image: projectArGame,
      description: 'Interactive AR mobile app enabling users to visualize interior fixtures in their space before purchase. Built with ARKit and ARCore for seamless cross-platform experience.',
      technologies: ['Unity3D', 'ARKit', 'ARCore', 'C#', 'Firebase'],
      achievements: [
        'Reduced return rate by 35%',
        'Optimized AR tracking for 60 FPS on mid-range devices',
        'Integrated real-time product catalog sync',
      ],
    },
    {
      id: 2,
      title: 'VR Training Simulator',
      category: 'Virtual Reality',
      image: projectVrExperience,
      description: 'Immersive VR training environment for industrial equipment operation. Features realistic physics, haptic feedback, and performance analytics.',
      technologies: ['Unity3D', 'Oculus SDK', 'PlayFab', 'Physics Engine'],
      achievements: [
        'Reduced training time by 50%',
        'Achieved 90 FPS on Quest 2',
        'Integrated cloud-based progress tracking',
      ],
    },
    {
      id: 3,
      title: 'Crowd Legends',
      category: 'Mobile',
      image: projectCrowdLegends,
      description: 'Fan-powered fantasy football game for mobile. Build your ultimate squad with FIFPRO-licensed players, vote on matchups, and compete in daily 5-minute challenges. Your opinion decides the winner.',
      technologies: ['Unity3D', 'FIFPRO API', 'PlayFab', 'Cloud Functions', 'IAP'],
      achievements: [
        '5K+ downloads and growing',
        'Real-time player voting system with <50ms latency',
        'Daily engagement with 5-minute challenge format',
        'FIFPRO-licensed player database integration',
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful Unity projects across various platforms
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="font-semibold">View Details</span>
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Project Image */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-3">{selectedProject.category}</Badge>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
