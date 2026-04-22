import Reveal from "./Reveal";

function Footer() {
  return (
    <div className="pt-16 p-2 bg-mist-100">
      <Reveal>
        <div className="lg:flex lg:justify-between lg:items-center lg:space-x-6">
          <div>
            <div className="  hidden lg:block text-center rounded-b-full p-6 font-bold">
              <div className="md:bg-taupe-50  text-7xl rounded-full bg-blue-400">
                Your <span className="text-yellow-400">Sub</span>
              </div>
              <div className="pb-16 pt-4 text-left hidden lg:block text-sm font-medium">
                Your one-step platformor all bill payment. Trusted Fast and
                Secure
              </div>
            </div>
          </div>

          <div className="space-y-6 p-2 lg:space-x-56 lg:pr-4 md:flex md:justify-between">
            <div className="space-y-2">
              <div className="font-bold text-3xl">About</div>
              <div className="font-medium">About us</div>
              <div className="font-medium">Services</div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-3xl">Partnership</div>
              <div className="font-medium">Portal Owner</div>
              <div className="font-medium">Api documentation</div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-3xl">Others</div>
              <div className="font-medium">Contact </div>
              <div className="font-medium">Privacy Policy</div>
            </div>
          </div>
        </div>

        <div className=" text-7xl lg:hidden text-center rounded-b-full p-6 font-bold">
          <div className="md:bg-taupe-50  rounded-full bg-blue-100">
            Your <span className="text-yellow-400">Sub</span>
          </div>
        </div>
        <div className="pb-16 text-center lg:hidden text-md font-medium">
          Your one-step platformor all bill payment. Trusted Fast and Secure
        </div>
        <div className="text-center text-md font-medium">
          <div>@2026 Yoursub - All Rights Reserved</div>
          <div>
            Developed by
            <span className="pl-2 text-blue-300">
              <a href="https://nice-bookings-504752.framer.app/">
                Olusegun Ayomide
              </a>
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
export default Footer;
