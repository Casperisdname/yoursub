import Reveal from "./Reveal";

function Partner() {
  return (
    <div className="px-4 md:flex md:justify-between md:items-center md:px-32 text-left bg-yellow-500 py-22 space-y-2">
      <Reveal>
        <div>
          <div className="text-4xl text-yellow-50 font-bold pb-4">
            Partnership
          </div>
          <div className="text-white font-medium">
            Do you want your own VTUand data purchase platform?
          </div>
          <div className="pb-4 text-white font-medium">
            Lets elp you get started. You could be making a minimum on N100000 a
            month
          </div>
        </div>

        <div>
          <button className="px-6 py-3 bg-white ">Get Started</button>
        </div>
      </Reveal>
    </div>
  );
}
export default Partner;
