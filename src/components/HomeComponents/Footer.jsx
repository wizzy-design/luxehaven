import styled from "styled-components";
// Images
// import facebook from "../../assets/icons/FaceBook.svg";
// import twitter from "../../assets/icons/Twitter.svg";
// import linkedin from "../../assets/icons/LinkedIn.svg";

const Footer = () => {
  return (
    <Parent>
      {/* First part of the footer */}
      <Head>
        <div className="title">
          <h1>Live your </h1>
          <h1>dream home</h1>
        </div>
        <div className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
          nunc, pretium vel aliquam eu, cursus finibus lectus. Duis aliquet
          ligula sed porttitor ultricies.
        </div>
      </Head>
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  padding: 5rem 0 0 0rem;
  color: #fff;
  background: #101010;
  font-family: "Mulish", sans-serif;

  h1 {
    margin: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding: 2rem 0 6rem 0;

  .title {
    h1 {
      font-family: Bonky free personal use;
      font-weight: 400;
      font-size: 3.2rem;
      color: #fff;
    }
    h1:nth-child(2) {
      position: relative;
      left: 7rem;
    }
  }

  .sub-title {
    position: relative;
    width: 35%;
    color: #bebebe;
    top: 4rem;
    line-height: 20.08px;
    font-family: "Montaga", sans-serif;
  }
`;

export default Footer;
