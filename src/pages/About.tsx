import { FaCheckCircle, FaEye, FaRocket, FaStar } from 'react-icons/fa'

// Data untuk achievements, bisa kamu pindah ke constants.ts
const achievements = [
  "2,500+ active members from various backgrounds",
  "15,000+ trees successfully planted in urban areas",
  "50+ environmental programs have been implemented",
  "25 schools become partners in the education program",
  "30% reduction in plastic use in the community"
];

const About = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Cerita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">
              Our Travel Stories
            </h1>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Starting from a group of individuals' concern about the worsening
                environmental conditions, the Sustainable Green Environment
                Community was formed in 2020 with a determination to make a real
                difference. [cite: 25, 92]
              </p>
              <p>
                We believe that every small action, when taken together,
                can create a tremendous impact. [cite: 26, 93]
              </p>
              <p>
                From tree planting programs to environmental education, every step we
                take is dedicated to a greener and more sustainable future. [cite: 27, 94]
              </p>
              <p>
                Today, we are proud to be home to thousands of individuals who share the same
                vision—creating a healthier environment for current and future generations. [cite: 95]
              </p>
            </div>
          </div>

          {/* Bagian Achievements */}
          <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-brand-green-dark mb-6">
              Our Achievements
            </h2>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="h-6 w-6 text-brand-green-medium flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bagian Visi, Misi, Mark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <FaEye className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Vission</h3>
            <p className="text-gray-600">To be a leading environmental community...</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <FaRocket className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Mission</h3>
            <p className="text-gray-600">To be a leading environmental community...</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <FaStar className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Mark</h3>
            <p className="text-gray-600">To be a leading environmental community...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About