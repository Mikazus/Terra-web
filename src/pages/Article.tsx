import { useState } from 'react'
import ArticleCard from '../components/ui/ArticleCard'

const articles = [
  { title: "Impact of Climate Change and Our Role", date: "15 November 2024", category: "Global issue", imageUrl: "/images/article-climate.jpg" },
  { title: "Sustainable Living: Start from Home", date: "15 November 2024", category: "Lifestyle", imageUrl: "/images/article-living.jpg" },
  { title: "Forest Conservation Success Stories", date: "15 November 2024", category: "Conservation", imageUrl: "/images/article-forest.jpg" },
  // ... Tambahkan artikel lainnya
];

const categories = ["All Category", "Lifestyle", "Conservation", "Environmental News"];

const Article = () => {
  const [activeCategory, setActiveCategory] = useState("All Category");

  return (
    <div className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4">
            Article & Education
          </h1>
          <p className="text-lg text-gray-600">
            Find inspiring and useful articles about the environment here.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-6 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-brand-green-medium text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article