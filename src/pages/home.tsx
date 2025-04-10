import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, GitBranch, Star, GitCommit, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/dashboard/${username}`);
    }
  };

  return (
    <div className="min-h-screen grid-pattern">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Hero Section */}
          <div className="relative space-y-6 py-12">
            <div className="absolute inset-0 hero-gradient" />
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <Github className="h-16 w-16 text-primary mr-4" />
                <h1 className="text-6xl font-bold tracking-tighter gradient-text">
                  SPYGIT
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Your AI-powered GitHub detective. Analyze profiles, track repositories,
                and uncover insights with precision.
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter GitHub username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg">
                Analyze Profile
              </Button>
            </form>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 card-hover-effect">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Repository Analysis</h3>
              <p className="text-muted-foreground">
                Deep dive into repositories, languages, and coding patterns with AI-powered insights.
              </p>
            </Card>
            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 card-hover-effect">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Engagement Metrics</h3>
              <p className="text-muted-foreground">
                Track stars, forks, and community engagement with real-time analytics.
              </p>
            </Card>
            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 card-hover-effect">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GitCommit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Activity Insights</h3>
              <p className="text-muted-foreground">
                Visualize commit patterns and contribution history with beautiful charts.
              </p>
            </Card>
          </div>

          {/* Trusted By Section */}
          <div className="w-full max-w-4xl mt-24">
            <p className="text-sm text-muted-foreground mb-6">TRUSTED BY DEVELOPERS FROM</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-50">
              {['Google', 'Meta', 'Microsoft', 'Amazon', 'Apple', 'Netflix'].map((company) => (
                <div key={company} className="flex items-center justify-center">
                  <span className="text-muted-foreground font-mono">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}