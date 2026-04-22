import Reveal from "./Reveal";

function Started() {
  return (
    <div className="text-center  bg-blue-800 text-blue-100 py-32">
      <Reveal>
        <div className="text-4xl  font-bold pb-4"> Get started</div>
        <div className="text-lg font-medium pb-6">
          Start Enjoying All Of Our Services At The Best Affordable Prices
        </div>
        <div className="flex justify-center flex-row gap-6">
          <div>
            <button className="bg-stone-900 px-4 text-lg py-2 font-bold">
              Register Now
            </button>
          </div>
          <div>
            <button className="bg-stone-900 px-4 py-2 text-lg font-bold">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-row gap-6 pt-12 text-md font-medium">
          <div>✔ Trusted</div>
          <div>✔ Fast</div>
          <div>✔ Secure</div>
        </div>
      </Reveal>
    </div>
  );
}
export default Started;
