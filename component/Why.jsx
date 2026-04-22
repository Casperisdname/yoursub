import Card from "./Card";
import Reveal from "./Reveal";

function Why() {
  return (
    <div className=" pb-48 text-2xl">
      <Reveal>
        <h2 className="text-center font-bold text-3xl">Why Choose Us?</h2>
        <p className="text-center pb-6 pt-6">Why Should you choose Yoursub</p>
        <div className="grid md:grid-cols-3 gap-8 pr-4 pl-4 items-stretch">
          <Card
            emogi="⚡️"
            head="Instant transaction"
            content="Your transactions are protected with advanced security systems, ensuring your money and personal information are always safe."
          />
          <Card
            emogi="🔒"
            head="Secure Payments"
            content="Get your airtime, data, and bill payments processed in seconds. No delays, no waiting — just fast and reliable service every time."
          />
          <Card
            emogi="📱"
            head="All-in-One Platform"
            content="Enjoy competitive pricing and value for money on all services. More data, more value, less cost."
          />
          <Card
            emogi="💰"
            head="Affordable Rates"
            content="Get your airtime, data, and bill payments processed in seconds. No delays, no waiting — just fast and reliable service every time."
          />
          <Card
            emogi="🌍"
            head="24/7 Availability"
            content="Our platform is always online, so you can make transactions anytime, anywhere — no restrictions."
          />
          <Card
            emogi="🤝"
            head="Reliable Service"
            content="We prioritize consistency and uptime, so you can trust us to deliver every single time without failure."
          />
        </div>
      </Reveal>
    </div>
  );
}
export default Why;
