import Reveal from "./Reveal";

function Stay() {
  return (
    <div className="pt-42 pb-42 ">
      <Reveal>
        <div className="lg:flex text-left px-4 md:px-18 lg:justify-center">
          <div>
            <div className="text-red-500 font-bold pb-3"> Stay Connected</div>
            <div className="font-bold text-2xl pb-3">
              Frequently Ask Questions.
            </div>
            <div className="font-medium text-gray-500 pb-16">
              These are some frequently asked questions to give you more
              information out our platformand help you get started. if you have
              any other question, please do contact customer care
            </div>
          </div>
          <div className="px-4 space-y-6">
            <div className="bg-stone-50 p-4 shadow-lg">
              <p className=" text-red-500 font-bold">
                {" "}
                1. How do i buy Airtime?
              </p>
              <p className="pt-6 p-3 text-stone-700">
                First create an account and login. After login, click fund
                wallet from the dashboard menu. Fund your wallet with your
                preferred option after funding, click on buy airtime from the
                dashboard menu, select your network and enter the phone number
                you want to recharge and the amount you want to recharge. After
                that click on buy now and your transaction will be processed in
                seconds.
              </p>
            </div>
            <div className="bg-sky-50 p-4 font-bold shadow-lg">
              2. How do i buy Data?
            </div>
            <div className="bg-sky-50 p-4 font-bold shadow-lg">
              3. How do i check my Data balance <p>First</p>
            </div>
            <div className="bg-sky-50 p-4 font-bold shadow-lg">
              4. Is the data plan compatible for all devices/modern/wifior mifi
              <p>First</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
export default Stay;
