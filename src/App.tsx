import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/navbar';
import Home from '@/pages/home';
import Dashboard from '@/pages/dashboard';
import About from '@/pages/about';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="spygit-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard/:username" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;