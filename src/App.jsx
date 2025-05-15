
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsGrid from './components/NewsGrid';
import SearchFilter from './components/SearchFilter';
import PageTitle from './components/PageTitle';
import { dummyNews, categories } from '../data/newsData'

export default function NewsPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [filteredNews, setFilteredNews] = useState(dummyNews);

  // Filter berita berdasarkan pencarian dan kategori
  useEffect(() => {
    const results = dummyNews.filter(news => {
      const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Semua" || news.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredNews(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PageTitle title="Berita Terkini" />
        
        <SearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        
        <NewsGrid news={filteredNews} />
      </main>
      <Footer categories={categories.slice(1)} />
    </div>
  );
}