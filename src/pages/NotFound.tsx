import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-48 text-center">
      <h1 className="text-9xl font-bold text-brand-green-light">404</h1>
      <h2 className="text-4xl font-semibold text-brand-green-dark mt-4 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-brand-green-medium text-white hover:bg-brand-green-dark"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound