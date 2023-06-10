import Intro from "../components/HomeComponents/Intro";
import Showcases from "../components/HomeComponents/Showcases";
import AboutUs from "../components/HomeComponents/AboutUS";

// eslint-disable-next-line react/prop-types
const HomePage = ({ introRef }) => {
  return (
    <>
      <Intro introRef={introRef} />
      {/* Passing introRef by prop drilling */}
      <Showcases />
      <AboutUs />
    </>
  );
};

export default HomePage;
