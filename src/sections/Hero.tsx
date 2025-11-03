import Button from '../components/ui/Button'
import LandingImage from '../images/Landing.jpg'

const Hero = () => {
  return (
    // Kita hapus 'justify-center' dan 'text-left' agar bisa di-align
    <div 
      className="relative h-[calc(100vh-4rem)] min-h-[700px] flex items-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${LandingImage})` }}
    >
      {/* Overlay gelap untuk kontras */}
      <div className="absolute inset-0 bg-black/50 z-0"> </div>

      {/* Kontainer diubah jadi flexbox */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        {/* Tambahkan flex container di sini */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          {/* Blok Teks di Kiri */}
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
              Turn intention into impact.
              <br/>
              Preserve the earth, together.
            </h1>
            <p className="mt-4 text-xl md:text-xl text-gray-200 drop-shadow-md">
              The planet bleeds while we watch. Our platform transforms silent concern into powerful action.
            </p>
          </div>

          {/* Blok Tombol di Kanan */}
          <div className="flex-shrink-0 flex gap-3">
            <Button href="/login" variant="outline">Login</Button>
            <Button href="/event" variant="solid">Join Now</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero