import About from "./Components/About/About";

import BrandLogo from "./Components/BrandLogo/BrandLogo";

import ClassesFeatured from "./Components/ClassesSection/ClassesFeatured";
// import ClassesFeatured from "./components/ClassesSection/ClassesFeatured";
import ContactUS from "./Components/ContactUs/ContactUS";
import Discount from "./Components/Discount/Discount";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroBanner from "./Components/HeroSection/HeroBanner";
import OnlineStore from "./Components/OnlineStore/OnlineStore";
import Pricing from "./Components/Pricing/Pricing";
import Schedule from "./Components/Schedule/Schedule";
import SectionBg from "./Components/SectionBg/SectionBg";
import Team from "./Components/Team/Team";
import Testimonial from "./Components/Testimonial/Testimonial";
import Tranier from "./Components/Tranier/Tranier";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />

      {/* <About /> */}
      <About />
      <ClassesFeatured />
      <Team />
      <Tranier />
      <Schedule />
      <Discount />
      <Pricing />
      <SectionBg />
      <OnlineStore />
      <Testimonial />
      <BrandLogo />
      <ContactUS />
      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
