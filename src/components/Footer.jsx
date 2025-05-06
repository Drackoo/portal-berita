
export default function Footer({ categories }) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">WinniCode</h3>
            <p className="text-gray-300 text-sm">
              Portal berita terkini dengan informasi akurat dan terpercaya.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kategori</h4>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">{category}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <p className="text-gray-300 text-sm">
              Email: info@gmail.com<br />
              Telepon: +62 123 4567 890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2025 WinniCode. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}