import ProgramCard from '../components/ui/ProgramCard'
import programData from '../data/programData'

const programs = programData;

const Program = () => {
  return (
    <div className="py-16 md:py-24 bg-brand-gray">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4">
            Program
          </h1>
          <p className="text-lg text-gray-600">
            Various innovative programs that have been proven to have a positive impact on the environment and society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Program