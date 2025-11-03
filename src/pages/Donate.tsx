
import { Link } from 'react-router-dom'
import marks from '../images/icon/marks.png'
const Donate = () => {
  return (
    <div className=" flex items-center justify-center py-24 md:py-48 pb-32 bg-[#EFFADE]">
      <div className="container w-4xl h-[223px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center backdrop-blur-md  bg-transparent p-12 md:p-5 rounded-full shadow-lg">
          <img src={marks} className="h-16 w-16 text-brand-green-medium mx-auto mb-6" />
          <h1 className="text-4xl md:text-[32px] font-bold text-[#3C6300] mb-4">
            Support Our Movement
          </h1>
          <p className="text-[14px] text-[#3C6300] mb-10 max-w-md mx-auto">
            Every contribution you make helps create a greener and more sustainable environment.
          </p>
          <Link
            to="#"
            className=" w-[77px] h-[21px] px-2 py-2 rounded-full text-lg font-semibold transition-all duration-300 bg-[#ECFFD0] text-[#3C6300] hover:bg-brand-green-dark shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Donate