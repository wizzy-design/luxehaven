import Intro from "../components/HomeComponents/Intro";
import Showcases from "../components/HomeComponents/Showcases";
import AboutUs from "../components/HomeComponents/AboutUS";
import Faq from "../components/HomeComponents/Faq";
import Projects from "../components/HomeComponents/Projects";
import Footer from "../components/HomeComponents/Footer";

// eslint-disable-next-line react/prop-types
const HomePage = ({ introRef }) => {
  return (
    <>
      <Intro introRef={introRef} />
      {/* Passing introRef by prop drilling */}
      <Showcases />
      <Projects />
      <AboutUs />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
