type ProgramCardProps = {
  image: string;
};

const ProgramCard = ({ image }: ProgramCardProps) => {  
  return (
    <div className="rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="w-full h-[614px] w-[400px] overflow-hidden bg-gray-200 rounded-3xl">
        <img src={image} alt="Program" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default ProgramCard