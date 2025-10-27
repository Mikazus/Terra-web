import { FaGraduationCap, FaUserFriends, FaRecycle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type ProgramCardProps = {
  title: string;
  description: string;
  participant: string;
  impact: string;
};

const ProgramCard = ({ title, description, participant, impact }: ProgramCardProps) => {
  return (
    <div className="bg-brand-green-light/30 border border-brand-green-medium/50 rounded-lg shadow-lg p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold text-brand-green-dark">{title}</h3>
        <div className="p-3 bg-brand-green-medium rounded-full">
          <FaGraduationCap className="h-6 w-6 text-white" />
        </div>
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{description}</p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <FaUserFriends className="h-5 w-5 text-brand-green-dark" />
          <span className="font-medium text-gray-800">Participant: {participant}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaRecycle className="h-5 w-5 text-brand-green-dark" />
          <span className="font-medium text-gray-800">Impact: {impact}</span>
        </div>
      </div>

      <Link 
        to="#" 
        className="mt-auto text-center w-full bg-brand-green-medium text-white font-semibold py-3 rounded-lg hover:bg-brand-green-dark transition-colors"
      >
        Learn More
      </Link>
    </div>
  )
}

export default ProgramCard