import Footer from "../../Footer";
import Header from "../../header";
import Carousel from "../../Services/Caraousel";
import Card from "../Card";
import { data } from "../Data";

function Blogs() {
  const slides = [
    { image: "https://media3.giphy.com/media/gHiRWOaXGGHOY5w6f3/giphy.gif?cid=6c09b952141866m9v8pfdcolwxxlhumgmgkzy873ak8y2zco&ep=v1_gifs_search&rid=giphy.gif&ct=g", alt: "Slide 1" },
    { image: "https://media2.giphy.com/media/NT8Hd21WhtC0b92ZYy/giphy.gif?cid=6c09b952kif4n7l66aroawd3kh3qgpupiz4vadffmxpvtafo&ep=v1_gifs_search&rid=giphy.gif&ct=g", alt: "Slide 2" },
    { image: "https://media.tenor.com/3eeOYZ3cDpEAAAAM/stonks-chart.gif", alt: "Slide 3" },
    { image: "https://redma.co.in/wp-content/uploads/2024/03/WEB-DESIGN-DEVELOPMENT.gif", alt: "Slide 4" },
  ];

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-purple-500 via-white to-white">
        <div className="p-6 md:p-10 lg:p-20 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-black leading-relaxed">
            The Goobrand Blog is where our team shares insights and lessons about
            <br />
            <span className="font-dancing text-purple-600">
              marketing, digital strategy, growth, SEO, product, and more.
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 text-lg md:pl-10 md:pr-10 lg:pl-20 lg:pr-20">
          <Carousel slides={slides} />
          <div className="h-[300px] sm:h-[400px] w-[90%] sm:w-[600px] lg:w-[700px] border border-2 m-auto mt-10 text-black flex items-center justify-center">
            400X700
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10">
          {data.map((val, index) => (
            <Card
              key={index}
              img={val?.img}
              heading={val?.heading}
              text={val?.text}
              name={val?.name}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
