import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
  // Format tanggal ke format Indonesia
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('id-ID', options);
  };

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={news.image} 
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
            <Tag size={12} className="mr-1" />
            {news.category}
          </span>
          <span className="text-gray-500 text-xs flex items-center">
            <Calendar size={12} className="mr-1" />
            {formatDate(news.date)}
          </span>
          <span className="text-gray-500 text-xs flex items-center">
            <Clock size={12} className="mr-1" />
            {news.time}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.summary}</p>
        <Link to={`/news/${news.id}`} className="text-blue-700 font-medium hover:underline text-sm">
          Baca selengkapnya →
        </Link>
      </div>
    </article>
  );
}