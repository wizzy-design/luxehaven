import styled from "styled-components";
import SpaceImg from "./SpaceImg";
// Images
import Bedroom from "../../assets/img/Bedroom.png";
import Dining from "../../assets/img/Dining.png";
import Kitchen from "../../assets/img/Kitchen.png";
import livingroom from "../../assets/img/livingroom.png";

// Our Spaces Section

const Spaces = () => {
  return (
    <Parent>
      <Titles>
        <div className="title">Our Spaces</div>
        <div className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
          nunc, pretium vel aliquam eu, cursus finibus lectus. Duis aliquet
          ligula sed porttitor ultricies.
        </div>
      </Titles>
      <div className="img-container">
        <SpaceImg
          img={Dining}
          title="Dining"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={livingroom}
          title="Living Room"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={Dining}
          title="Dining"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={Kitchen}
          title="Kitchen"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
          img={Bedroom}
          title="Bedroom"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SpaceImg
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
  padding: 6rem 0 8rem 4rem;
  background: #101010;

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

const Titles = styled.div`
  display: flex;
  gap: 15rem;
  .title {
    padding-bottom: 1rem;
    font-family: Bonky free personal use;
    color: #f8f8f8;
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .sub-title {
    width: 30rem;
    padding-bottom: 3rem;
    font-family: "Montaga", sans-serif;
    color: #f8f8f8;
    font-size: 1rem;
    font-weight: 300;
    line-height: 30.12px;
  }
`;

export default Spaces;
