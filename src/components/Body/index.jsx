import AmbitiousGrowth from "../ambitiousGrowth";
import Brands from "../brandsAndDesign";
import Footer from "../Footer";
import FunnelCard from "../funnelCard";
import GrowthPlans from "../growthPlans";
import Header from "../header";
import MarketService from "../marketServices";
function Body() {
  return (
    <div>
      <Header/>
      <FunnelCard />
      <MarketService />
      <AmbitiousGrowth />
      <Brands />
      <GrowthPlans />
      <Footer />
    </div>
  );
}
export default Body;