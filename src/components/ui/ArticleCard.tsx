import { Link } from 'react-router-dom'
import { FaCalendar } from 'react-icons/fa'

type ArticleCardProps = {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
};

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={props.imageUrl} alt={props.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-medium text-brand-green-medium mb-2">{props.category}</span>
        <h3 className="text-xl font-semibold text-brand-green-dark mb-3 flex-grow">{props.title}</h3>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
          <FaCalendar />
          <span>{props.date}</span>
        </div>

        <Link 
          to="#" 
          className="mt-auto text-center w-full bg-brand-green-light text-brand-green-dark font-semibold py-3 rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Read Article
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard