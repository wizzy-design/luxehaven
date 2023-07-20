import styled from "styled-components";
import homeBg from "../../assets/img/homeBg.png";

// eslint-disable-next-line react/prop-types
const Intro = ({ introRef }) => {
  return (
    <Parent ref={introRef}>
      {/* ref is used to tag where i want to scroll too when the scroll event is activated */}
      <Body>
        <h1>Luxury Reimagined</h1>
        <h2>
          Discover Unparalleled Luxury and Indulge in Exquisite Living at
          Luxehaven
        </h2>
      </Body>
    </Parent>
  );
};

// Styled components
const Parent = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${homeBg});
`;

const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;

  h1 {
    margin: 0;
    width: max-content;
    font-family: "Bonky free personal use";
    font-weight: 400;
    font-style: normal;
    font-size: 6rem;
    line-height: 126px;
  }

  h2 {
    margin: 0;
    color: #fff;
    text-align: center;
    font-family: Montaga;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default Intro;
