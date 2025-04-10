import { Link } from 'react-router-dom';
import { Github, Search, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Github className="h-6 w-6" />
          <span className="text-lg font-bold">SPYGIT</span>
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}