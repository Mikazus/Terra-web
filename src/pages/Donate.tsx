import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Donate = () => {
  return (
    <div className="flex items-center justify-center py-24 md:py-48 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-brand-green-light/30 p-12 md:p-20 rounded-xl shadow-lg">
          <FaHeart className="h-16 w-16 text-brand-green-medium mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4">
            Support Our Movement
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-md mx-auto">
            Every contribution you make helps create a greener and more sustainable environment.
          </p>
          <Link
            to="#"
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-brand-green-medium text-white hover:bg-brand-green-dark shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Donate