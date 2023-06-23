import Intro from "../components/HomeComponents/Intro";
import Showcases from "../components/HomeComponents/Showcases";
import AboutUs from "../components/HomeComponents/AboutUS";
import Faq from "../components/HomeComponents/Faq";

// eslint-disable-next-line react/prop-types
const HomePage = ({ introRef }) => {
  return (
    <>
      <Intro introRef={introRef} />
      {/* Passing introRef by prop drilling */}
      <Showcases />
      <AboutUs />
      <Faq />
    </>
  );
};

export default HomePage;
