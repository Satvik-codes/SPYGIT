import { Github, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About SPYGIT</h1>
          <p className="text-xl text-muted-foreground">
            A powerful GitHub profile analyzer built with modern web technologies
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              SPYGIT helps developers and recruiters gain insights into GitHub profiles
              through beautiful visualizations and detailed analytics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Comprehensive profile analysis</li>
              <li>Repository metrics and insights</li>
              <li>Contribution activity visualization</li>
              <li>Language distribution charts</li>
              <li>Repository filtering and sorting</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Frontend</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>React with TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui Components</li>
                  <li>Recharts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Features</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Responsive Design</li>
                  <li>Dark/Light Theme</li>
                  <li>Real-time Data</li>
                  <li>Interactive Charts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Try It Out</CardTitle>
            <CardDescription>
              Test SPYGIT with these popular GitHub profiles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
                facebook
              </Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
                google
              </Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
                microsoft
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="lg" className="space-x-2">
            <Github className="h-5 w-5" />
            <span>View Source</span>
          </Button>
          <Button variant="outline" size="lg" className="space-x-2">
            <Globe className="h-5 w-5" />
            <span>Portfolio</span>
          </Button>
          <Button variant="outline" size="lg" className="space-x-2">
            <Mail className="h-5 w-5" />
            <span>Contact</span>
          </Button>
        </div>
      </div>
    </div>
  );
}