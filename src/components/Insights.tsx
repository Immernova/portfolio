import { useState } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}

const Insights = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      title: 'Optimizing Unity Ads for Maximum Revenue',
      excerpt: 'Learn best practices for implementing and optimizing Unity Ads, AdMob integration, and rewarded video strategies.',
      category: 'Monetization',
      date: '2025-10-01',
      readTime: '5 min read',
      content: [
        'Monetization is crucial for the success of mobile games, and Unity Ads combined with AdMob provides a powerful solution. In this guide, we\'ll explore proven strategies to maximize your ad revenue while maintaining a positive user experience.',
        '**Understanding Unity Ads Integration**',
        'Unity Ads is seamlessly integrated into the Unity engine, making implementation straightforward. Start by importing the Unity Ads package and initializing it with your game ID. The key is to implement ads at natural break points in your game flow.',
        '**Rewarded Video Best Practices**',
        'Rewarded videos are the highest-performing ad format. Place them strategically where players get meaningful rewards: extra lives, currency bonuses, or power-ups. Always make rewarded ads optional and clearly communicate the benefit.',
        '**AdMob Mediation Strategy**',
        'Using AdMob as a mediation platform allows you to maximize fill rates and eCPM. Configure multiple ad networks through AdMob to compete for your ad inventory. We\'ve seen revenue increases of 30-40% with proper mediation setup.',
        '**Frequency Capping and User Experience**',
        'Don\'t overwhelm users with ads. Implement frequency capping to limit interstitial ads to one per 3-5 minutes of gameplay. Monitor your retention metrics closely - aggressive ad placement can hurt long-term revenue.',
        '**A/B Testing and Analytics**',
        'Continuously test different ad placements, frequencies, and formats. Use Unity Analytics to track metrics like ARPDAU (Average Revenue Per Daily Active User) and adjust your strategy based on data, not assumptions.',
      ],
    },
    {
      title: 'How We Use Addressables for Lightweight Builds',
      excerpt: 'Reduce your Unity app size by 60% using Addressables. A complete guide to asset management and on-demand loading.',
      category: 'Optimization',
      date: '2025-09-28',
      readTime: '7 min read',
      content: [
        'App size is a critical factor in download conversion rates. Unity\'s Addressables system allows you to reduce initial download size dramatically by loading assets on-demand. Here\'s how we achieved a 60% size reduction in our latest project.',
        '**What Are Addressables?**',
        'Addressables is Unity\'s asset management system that lets you load assets by "address" rather than direct reference. Assets can be bundled separately and downloaded at runtime, keeping your initial build size minimal.',
        '**Setting Up Your First Addressables**',
        'Start by converting your heaviest assets: textures, audio files, and prefabs. Mark assets as Addressable in the Inspector, then organize them into logical groups. We typically separate assets by level, feature, or content pack.',
        '**Remote vs Local Asset Bundles**',
        'You can host Addressables remotely on CDN or include them locally. For critical assets needed immediately, use local bundles. For optional content like advanced levels or seasonal content, use remote bundles to keep the initial download small.',
        '**Loading and Memory Management**',
        'Load Addressables asynchronously to avoid frame drops. Always release loaded assets when no longer needed using Addressables.Release(). Implement a smart caching strategy to balance memory usage and load times.',
        '**Real-World Results**',
        'In our mobile game, we moved all non-essential levels, character skins, and audio to Addressables. The initial APK dropped from 450MB to 180MB. Download conversion increased by 25%, and we can now push content updates without forcing users to download the entire app again.',
        '**Common Pitfalls to Avoid**',
        'Don\'t make everything Addressable - there\'s overhead. Keep frequently used assets in the main build. Test thoroughly across different network conditions. Implement fallback mechanisms for failed downloads.',
      ],
    },
    {
      title: 'Making AR Apps Run Smoothly on Mid-Range Devices',
      excerpt: 'Performance optimization techniques for ARKit and ARCore to ensure 60 FPS on older mobile hardware.',
      category: 'AR/VR',
      date: '2025-09-25',
      readTime: '6 min read',
      content: [
        'AR experiences are resource-intensive, and many developers only test on flagship devices. However, the majority of users have mid-range phones. Here\'s how we optimize AR apps to run smoothly at 60 FPS on older hardware.',
        '**Understanding AR Performance Bottlenecks**',
        'AR apps face unique challenges: continuous camera processing, real-time tracking, and 3D rendering all happening simultaneously. The camera feed alone can consume significant resources, so optimization is critical.',
        '**Reduce Polygon Count Aggressively**',
        'Mid-range devices struggle with high polygon counts. Keep your 3D models under 10K triangles for main objects. Use LOD (Level of Detail) systems to show simplified models at distance. We\'ve seen 40% performance gains from aggressive polygon reduction.',
        '**Optimize Texture Sizes and Compression**',
        'Use ASTC compression for Android and PVRTC for iOS. Keep texture sizes reasonable - 1024x1024 maximum for most objects. Consider using texture atlases to reduce draw calls. Memory bandwidth is often the limiting factor on mobile GPUs.',
        '**Lighting and Shadows Strategy**',
        'Real-time shadows are expensive. Use baked lighting where possible and limit dynamic shadows to key objects. Implement a simple ambient occlusion shader instead of real-time shadow calculations for non-critical elements.',
        '**Plane Detection and Tracking**',
        'Limit the number of tracked planes to what\'s necessary. Disable plane detection once the initial surface is found. Update tracking at 30Hz instead of 60Hz if full frame rate isn\'t critical for your experience.',
        '**Frame Rate Management**',
        'Implement dynamic quality scaling. Monitor frame rate and automatically reduce quality settings when performance drops. Users prefer consistent 60 FPS at medium quality over inconsistent high quality.',
        '**Testing on Target Hardware**',
        'Always test on mid-range devices from 2-3 years ago. Use Unity Profiler to identify bottlenecks. Common culprits: overdraw, too many vertices, garbage collection spikes, and unoptimized shaders.',
      ],
    },
  ];

  return (
    <section id="insights" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tips, techniques, and best practices from our Unity development experience
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card
                key={index}
                onClick={() => setSelectedPost(post)}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>

                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-2">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Post Detail Dialog */}
          <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedPost && (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{selectedPost.category}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedPost(null)}
                        className="h-8 w-8"
                      >
                        <X size={20} />
                      </Button>
                    </div>
                    
                    <h2 className="text-3xl font-bold">{selectedPost.title}</h2>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-invert max-w-none space-y-4">
                    {selectedPost.content.map((paragraph, idx) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={idx} className="text-xl font-semibold text-foreground mt-6 mb-3">
                            {paragraph.slice(2, -2)}
                          </h3>
                        );
                      }
                      return (
                        <p key={idx} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="pt-6 border-t border-border">
                    <Button onClick={() => setSelectedPost(null)} className="w-full sm:w-auto">
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              Want to stay updated with the latest Unity development tips?
            </p>
            <button className="text-primary hover:text-primary-glow font-semibold text-lg underline underline-offset-4 transition-colors">
              Subscribe to our newsletter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
