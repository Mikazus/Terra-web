import Or from '../images/Or.png'
import Gicon from '../images/Gicon.svg'
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFF9DE]">
      <form className="bg-white/10 backdrop-blur-md p-7 rounded-2xl shadow-lg border border-white/20">
        <h1 className="text-2xl font-bold mt-2 mb-7 flex justify-center  ">Welcome back !</h1>
        <input type="email" placeholder="Email" className="rounded-xl border bg-white border-white px-3 py-4 rounded mb-6 w-full" />
        <input type="password" placeholder="Password" className="rounded-xl border bg-white border-white px-3 py-4 rounded mb-4 w-full" />
        <button type="submit" className="w-full text-white text-2xl py-2 rounded-xl mt-3 bg-[#91C93A]">Login</button>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-[#91C93A] hover:text-black transition-colors font-semibold">Forgot Password?</a>
          <img src={Or} alt="Or" className="mx-auto mt-6 mb-6" />
        </div>
        <button type="button" 
        onClick={() => window.location.href = 'https://www.google.com'}
        className="gap-x-2 w-full text-xl py-2 rounded-xl mt-3 flex justify-center items-center bg-white"><img src={Gicon} className=" px-0 py-0"></img>Login With Google</button>
      </form>
    </div>
  )
}

export default Login