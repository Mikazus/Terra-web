import { Link } from 'react-router-dom'
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  imageUrl: string;
};

const EventCard = (props: EventCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={props.imageUrl} alt={props.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">{props.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{props.description}</p>
        
        <div className="space-y-3 text-gray-700 mb-6">
          <div className="flex items-center gap-3"><FaCalendar className="text-brand-green-medium" /><span>{props.date}</span></div>
          <div className="flex items-center gap-3"><FaClock className="text-brand-green-medium" /><span>{props.time}</span></div>
          <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-brand-green-medium" /><span>{props.location}</span></div>
          <div className="flex items-center gap-3"><FaUsers className="text-brand-green-medium" /><span>{props.participants}</span></div>
        </div>

        <Link 
          to="#" 
          className="mt-auto text-center w-full bg-brand-green-light text-brand-green-dark font-semibold py-3 rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Register Now
        </Link>
      </div>
    </div>
  )
}

export default EventCard