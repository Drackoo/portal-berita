import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import { dummyNews, categories } from '../../data/newsData';

export default function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    // Find the specific news article by ID
    const selectedNews = dummyNews.find(item => item.id === parseInt(id));
    setNews(selectedNews);

    // Find related news (same category, excluding current news)
    if (selectedNews) {
      const related = dummyNews
        .filter(item => item.category === selectedNews.category && item.id !== selectedNews.id)
        .slice(0, 3); // Get only 3 related news
      setRelatedNews(related);
    }
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-gray-700">Berita tidak ditemukan</h2>
            <Link to="/" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Kembali ke Beranda
            </Link>
          </div>
        </main>
        <Footer categories={categories.slice(1)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            &larr; Kembali ke Beranda
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {news.category}
            </span>
            <span className="text-gray-500 text-sm ml-4">{news.date}</span>
          </div>
          
          <PageTitle title={news.title} />
          
          <div className="mb-6">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-auto rounded-lg object-cover max-h-96"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {news.content}
            </p>
          </div>
        </article>

        {relatedNews.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Berita Terkait</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/news/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-semibold text-gray-800 hover:text-blue-600">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-2">{item.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer categories={categories.slice(1)} />
    </div>
  );
}
