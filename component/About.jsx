import Reveal from "./Reveal";

function About() {
  return (
    <div id="about" className="md:w-[700px] md:pl-36 pb-48 text-2xl  text-left">
      <Reveal>
        <div className="pt-20  text-center md:text-left md:pl-4 font-bold text-5xl">
          About Us
        </div>
        <div className="px-4 pt-8">
          YOURSUB is a fast and reliable platform that lets you buy airtime,
          subscribe to data, and pay bills in seconds — no stress, no delays. We
          understand how important these services are in your daily life, so
          we’ve created a system that is simple to use, secure, and always
          available.
        </div>
        <div className="px-4 pt-8">
          Our focus is on speed, convenience, and trust. With just a few clicks,
          you can complete transactions anytime, anywhere, without worrying
          about downtime or complications.
        </div>
        <div className="px-4 pt-8">
          We’re here to make digital payments effortless — so you can focus on
          what matters most.
        </div>
      </Reveal>
    </div>
  );
}
export default About;
