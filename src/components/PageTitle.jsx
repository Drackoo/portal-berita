export default function PageTitle({ title }) {
    return (
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
        <div className="h-1 w-20 bg-blue-700"></div>
      </div>
    );
  }