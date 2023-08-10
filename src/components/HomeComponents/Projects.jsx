import styled from "styled-components";
import ProImg from "./ProImg";
// Images
import Bedroom from "../../assets/img/Bedroom.png";
import Dining from "../../assets/img/Dining.png";
import Kitchen from "../../assets/img/Kitchen.png";
import livingroom from "../../assets/img/livingroom.png";

const Projects = () => {
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
        />
        <ProImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={livingroom}
          title="Living Room"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={Dining}
          title="Dining"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ProImg
          img={livingroom}
          title="Living Room"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </Parent>
  );
};

// Styled components
const Parent = styled.div`
  padding: 6rem 0 2rem 5rem;
  background: #303539;

  .title {
    padding-bottom: 1rem;
    font-family: Bonky free personal use;
    color: #d6d2ce;
    font-size: 2.7rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sub-title {
    width: 30rem;
    padding-bottom: 3rem;
    font-family: "Montaga", sans-serif;
    color: #c7c6c6;
    font-size: 1rem;
    font-weight: 300;
    line-height: 30.12px;
  }

  .img-container {
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding-right: 4rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Projects;
