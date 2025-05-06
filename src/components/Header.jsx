import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">WinniCode</h1>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline font-medium">Beranda</a>
          <a href="#" className="hover:underline">Terbaru</a>
          <a href="#" className="hover:underline">Trending</a>
          <a href="#" className="hover:underline">Masuk</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="py-2 hover:bg-blue-900 px-2 rounded">Beranda</a>
            <a href="#" className="py-2 hover:bg-blue-900 px-2 rounded">Terbaru</a>
            <a href="#" className="py-2 hover:bg-blue-900 px-2 rounded">Trending</a>
            <a href="#" className="py-2 hover:bg-blue-900 px-2 rounded">Masuk</a>
          </nav>
        </div>
      )}
    </header>
  );
}
