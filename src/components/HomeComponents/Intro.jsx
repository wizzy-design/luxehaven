import styled from "styled-components";
import homeBg from "../../assets/img/homeBg.png";

const Intro = () => {
  return (
    <Parent>
      <Body>
        <h1>LUXEHAVEN</h1>
        <h2>This is the best time for changing life</h2>
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
    font-family: "GFS Didot", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 6rem;
    line-height: 126px;
  }

  h2 {
    margin: 0;
    font-family: "Mulish", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 30px;
  }
`;

export default Intro;
