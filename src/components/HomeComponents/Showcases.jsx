// Image
import apartment1 from "../../assets/img/apartment1.png";
import apartment2 from "../../assets/img/apartment2.png";
//  Icons
import whiteArrow from "../../assets/icons/whiteArrow.svg";
import blackArrow from "../../assets/icons/blackArrow.svg";
// Dependencies
import styled from "styled-components";
import ShowCase from "./Showcase";

const Showcases = () => {
  return (
    <Parent>
      <ShowCase
        title="APARTMENT"
        fill="#000"
        img={apartment1}
        label="Apartment"
        arrow1={blackArrow}
        arrow2={whiteArrow}
      />
      <ShowCase
        title="PENTHOUSE"
        fill="#000"
        img={apartment2}
        label="Penthouse"
        arrow1={blackArrow}
        arrow2={whiteArrow}
      />
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  padding: 2rem 0;
`;

export default Showcases;