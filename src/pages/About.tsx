import mark from '../images/icon/mark.png'
import vision from '../images/icon/vision.png'
import mission from '../images/icon/target.png'
import aboutImage from '../images/about.jpg'

const About = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Cerita */}
        <div className="grid grid-cols-1 w-[1344px] h-[662px] lg:grid-cols-2 gap-16 items-center">
          {/* Image Container - Left */}
          <div className="order-1">
            <img 
              src={aboutImage} 
              alt="About Terra" 
              className="w-[600px] h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Text Container - Right */}
          <div className="order-2">
            <div className="space-y-4 text-xl text-black font-roboto">
              <p className='font-bold text-xl'>
                Starting from a group of individuals' concern about the worsening
                environmental conditions, Terra was formed in
                2020 with a determination to make a real
                difference.
              </p>
              <p className='mt-[120px]'>
                We believe that every small action, when taken together,
                can create a tremendous impact. From tree planting
                programs to environmental education, every step we take
                is dedicated to a greener and more sustainable future.
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Visi, Misi, Mark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <img src={vision} className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Vission</h3>
            <p className="text-gray-600">To be a leading environmental community that creates positive and sustainable change for future generations.</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <img src={mission} className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Mission</h3>
            <p className="text-gray-600">To be a leading environmental community that creates positive and sustainable change for future generations.</p>
          </div>
          <div className="border border-gray-200 p-8 rounded-xl shadow-sm text-center">
            <img src={mark} className="h-12 w-12 text-brand-green-medium mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Mark</h3>
            <p className="text-gray-600">To be a leading environmental community that creates positive and sustainable change for future generations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About