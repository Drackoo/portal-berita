import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function SearchFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  categories 
}) {
  const [showCategories, setShowCategories] = useState(false);
  
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Cari berita..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
      
      {/* Category Filter - Desktop */}
      <div className="hidden md:flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Category Filter - Mobile */}
      <div className="md:hidden relative">
        <button 
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center justify-between w-full px-4 py-2 bg-white border rounded-lg"
        >
          <span>{selectedCategory}</span>
          <ChevronDown size={18} />
        </button>
        
        {showCategories && (
          <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border rounded-lg shadow-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowCategories(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  selectedCategory === category && "font-medium"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}