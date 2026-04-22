import Reveal from "./Reveal";

function Hero() {
  return (
    <div
      id="home"
      className="text-left pt-36 md:pl-36 font-medium py-8 md:w-[700px]  px-8"
    >
      <Reveal>
        <div>
          <div className="pb-2 text-blue-700 font-bold">Welcome to yoursub</div>
          <h1 className="text-4xl pb-6 md:text-6xl  font-bold">
            Your one-stop platform for all Bills Payments
          </h1>
          <div className="pb-4">
            Get all your bills payment and subscription done with ease
          </div>
        </div>
        <div className="space-x-6">
          <button className="relative shadow-2xl overflow-hidden px-6 py-3 font-bold text-white bg-blue-500 rounded-xl group">
            <span className="relative z-10">Login</span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-400 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
          <button className="relative shadow-2xl overflow-hidden px-6 py-3 font-bold text-white bg-blue-500 rounded-xl group">
            <span className="relative z-10">Register</span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-400 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
        <div className="pt-32 md:pt-8">
          <img src="/app2.png" />
        </div>
      </Reveal>
    </div>
  );
}
export default Hero;
