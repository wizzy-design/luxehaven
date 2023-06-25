import styled from "styled-components";
import ProImg from "./ProImg";
// import { useRef } from "react";
// Images
import Bedroom from "../../assets/img/Bedroom.png";
import Dining from "../../assets/img/Dining.png";
import Kitchen from "../../assets/img/Kitchen.png";
import livingroom from "../../assets/img/livingroom.png";

const Projects = () => {
  // const image1 = useRef(1);
  // const image2 = useRef(2);
  // const image3 = useRef(3);
  // const image4 = useRef(4);
  // const image5 = useRef(5);
  // const image6 = useRef(6);
  // const image7 = useRef(7);
  // const image8 = useRef(8);

  return (
    <Parent>
      <div className="title">Our Projects</div>
      <div className="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        nunc, pretium vel aliquam eu, cursus finibus lectus. Duis aliquet ligula
        sed porttitor ultricies.
      </div>
      <div className="img-container">
        <ProImg
          img={Dining}
          title="Dining"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image1}
        />
        <ProImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image2}
        />
        <ProImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image3}
        />
        <ProImg
          img={livingroom}
          title="Living Room"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image4}
        />
        <ProImg
          img={Dining}
          title="Dining"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image5}
        />
        <ProImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image6}
        />
        <ProImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image7}
        />
        <ProImg
          img={livingroom}
          title="Living Room"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          // aref={image8}
        />
      </div>
    </Parent>
  );
};

// Styled components
const Parent = styled.div`
  padding: 6rem 0 2rem 5rem;
  background-color: #100d18;

  .title {
    padding-bottom: 1rem;
    font-family: "Mulish", sans-serif;
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sub-title {
    width: 30rem;
    padding-bottom: 3rem;
    font-family: "Mulish", sans-serif;
    color: #c7c6c6;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 30.12px;
  }

  .img-container {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding-right: 4rem;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

`;

export default Projects;
