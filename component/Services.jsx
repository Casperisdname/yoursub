import Reveal from "./Reveal";

function Services() {
  return (
    <div className="pb-20">
      <Reveal>
        <div className="text-center text-4xl font-bold pb-16">OUR SERVICES</div>
        <div className="flex justify-center md:flex-row flex-col px-8 space-x-8">
          <div className="">
            <img className="w-96" src="/app3.png" />
          </div>
          <div className="md:pt-16 pt-8 font-meduim">
            <div className=" text-red-500">What we do Best</div>
            <div className="text-3xl pb-4 text-stone-950 font-bold">
              Bill Payment with ease
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Purchase airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>{" "}
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
            <div className="text-3xl py-4 text-stone-950 font-bold">
              Other payment
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Purchase airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
            <div className="pt-4 border-1 p-2">
              ✅ Buy airtime at a discount rate
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
export default Services;
