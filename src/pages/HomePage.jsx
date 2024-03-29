import Intro from "../components/HomeComponents/Intro";
// import Showcases from "../components/HomeComponents/Showcases";
import AboutUs from "../components/HomeComponents/AboutUS";
import Faq from "../components/HomeComponents/Faq";
import Spaces from "../components/HomeComponents/Spaces";
import Footer from "../components/HomeComponents/Footer";
import Stats from "../components/HomeComponents/Stats";

// eslint-disable-next-line react/prop-types
const HomePage = ({ introRef }) => {
  return (
    <>
      <Intro introRef={introRef} />
      {/* Passing introRef by prop drilling */}
      <Stats />
      <AboutUs />
      {/* <Showcases /> */}
      <Spaces />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
