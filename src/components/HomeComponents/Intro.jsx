import styled from "styled-components";
import homeBg from "../../assets/img/homeBg.png";
import whiteArrow from "../../assets/icons/whiteIntroArrow.svg";
// import whiteDownArrow from "../../assets/icons/IntroWhiteDownArrow.svg";

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
        <Button>
          Explore Our Apartments
          <img src={whiteArrow} alt="Direction arrow" />
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
    padding-top: 2.5rem;
    width: max-content;
    font-family: "Bonky free personal use";
    font-weight: 400;
    font-style: normal;
    font-size: 4.5rem;
    line-height: 110px;
  }

  h2 {
    margin: 0;
    color: #fff;
    text-align: center;
    width: 90%;
    font-family: Montaga;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Button = styled.button`
  display: flex;
  margin-top: 2rem;
  padding: 0.25rem 0.5rem 0.25rem 2rem;
  align-items: center;
  font-size: 1rem;
  height: 50px;
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
    width: 2.2rem;
  }

  &:hover {
    img {
      transition: transform 0.5s ease;
      transform: rotate(45deg) scale(1.2);
    }
  }
`;

export default Intro;
