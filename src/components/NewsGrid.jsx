import NewsCard from './NewsCard';

export default function NewsGrid({ news }) {
  return (
    <>
      {news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Tidak ada berita yang ditemukan.</p>
        </div>
      )}
    </>
  );
}