import styled from "styled-components";
import homeBg from "../../assets/img/homeBg.png";
import whiteArrow from "../../assets/icons/whiteIntroArrow.svg";
// import whiteDownArrow from "../../assets/icons/IntroWhiteDownArrow.svg";

// eslint-disable-next-line react/prop-types
const Intro = ({ introRef }) => {
  return (
    <Parent ref={introRef}>
      {/* ref is used to tag where i want to scroll too when the scroll event is activated */}
      {/* <img src={whiteDownArrow} id="next" alt="Arrow to take to next page" /> */}
      <Body>
        <h1>Luxury Reimagined</h1>
        <h2>
          Discover Unparalleled Luxury and Indulge in Exquisite Living at
          Luxehaven
        </h2>
        <Button>
          Explore Our Apartments <img src={whiteArrow} alt="Direction arrow" />
        </Button>
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

  /* #next{
    position: absolute;
    width: 5rem;
    right: 6rem;
    bottom: 4rem;
    cursor: pointer;
  } */
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    font-size: 5.5rem;
    line-height: 126px;
  }

  h2 {
    margin: 0;
    color: #fff;
    text-align: center;
    width: 80%;
    font-family: Montaga;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Button = styled.button`
  display: flex;
  margin-top: 2rem;
  padding: 0.35rem 0.5rem 0.35rem 2rem;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Montaga", sans-serif;
  background: transparent;
  border: 1.5px #fff solid;
  gap: 2rem;
  border-radius: 2.5rem;
  cursor: pointer;

  img {
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  &:hover {
    img {
      transition: transform 0.5s ease;
      transform: rotate(45deg);
    }
  }
`;

export default Intro;
