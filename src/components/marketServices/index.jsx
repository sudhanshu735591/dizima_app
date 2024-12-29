import "./index.css";
import Example from "./Card";
function MarketService() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col py-10">
        <div className="border-l-4 border-white w-[90%] m-auto p-6 md:p-10 flex flex-col gap-6 md:gap-10">
          <h1 className="text-3xl md:text-6xl font-bold text-start">Dizima Stands for....</h1>
          <div className="text-lg md:text-xl leading-relaxed">
            <p className="mb-4 text-start">
              Dizima is for Digital Management. At <span className="text-yellow-300">DIGIMA</span>, we
              don't just provide digital management services. we provide a
              partnership built on trust, expertise, advertising, B2C Marketing and a deep understanding of
              your business. Our team has 12+ years of experience in the industry, and we stay
              up-to-date with the latest tools, trends, and techniques. This
              allows us to offer results-driven solutions that help your
              business grow, no matter what stage you're at. We have a strong
              track record of success in SEO, PPC, social media marketing, and
              more, giving our clients a significant edge in the digital
              marketplace.
            </p>
          </div>
        </div>
        <div className="flex m-auto gap-6 md:gap-10 p-6 md:p-10 flex-wrap lg:flex-nowrap justify-center">
          <Example 
          heading = "12+ Years of experience" 
          text="Our approach is deeply rooted in data and analytics. We believe that success in digital management is not about guesswork"
          img="https://www.theaquarious.com/assets/icons/why-chosse-ico1.svg"/>
          <Example 
          text="Get free bug fixes on past project deliveries with no extra charges ensuring smooth performance and customer satisfaction."
          heading = "6 Months Warranty" img = "https://www.theaquarious.com/assets/icons/why-chosse-ico2.svg"/>
          <Example 
          text = "Missed the deadline? Don’t worry, we take responsibility and ensure you get compensated—your satisfaction is our priority!"
          heading = "Penality on missed deadline" img="https://www.theaquarious.com/assets/icons/why-chosse-ico6.svg"/>
        </div>
      </div>
    </>
  );
}
export default MarketService;