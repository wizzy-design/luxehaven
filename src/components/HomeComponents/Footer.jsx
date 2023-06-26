import styled from "styled-components";
// Images
import facebook from "../../assets/icons/FaceBook.svg";
import twitter from "../../assets/icons/Twitter.svg";
import linkedin from "../../assets/icons/LinkedIn.svg";

const Footer = () => {
  return (
    <Parent>
      {/* First part of the footer */}
      <Head>
        <div className="title">
          <h1>Let’s work </h1>
          <h1>together</h1>
        </div>
        <div className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
          nunc, pretium vel aliquam eu, cursus finibus lectus. Duis aliquet
          ligula sed porttitor ultricies.
        </div>
      </Head>

      {/* Second part of the footer */}
      <Body>
        {/* First List */}
        <div className="list">
          <h2>Luxehaven</h2>
          <div className="list-icons">
            <img src={facebook} alt="FaceBook" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
        {/* Second List */}
        <div className="list">
          <h2>ADDRESS</h2>
          <ul>
            <li>
              767 5th Street, 21st Floor,
              <br /> Lagos, Nigeria.
            </li>
          </ul>
        </div>
        {/* Third List */}
        <div className="list">
          <h2>CALL US ON</h2>
          <ul>
            <li>+234 1 567 890</li>
            <li>+234 2 587 890</li>
            <li>DM US:</li>
            <li>Luxehaven@example.com</li>
          </ul>
        </div>
        {/* Fourth List */}
        <div className="list">
          <h2>OUR POLICIES</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </Body>

      {/* Last part of the footer */}
      <div className="footer-last">
        <div className="line"></div>
        <div>2023 Luxehaven Apartments </div>
      </div>
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  padding: 6rem 0 0 5rem;
  color: #d6d5d5;
  background-color: #100d18;
  font-family: "Mulish", sans-serif;

  h1 {
    margin: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding: 2rem 0 8rem 0;

  .title {
    h1 {
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
    color: #a1a1a1;
    top: 8rem;
    line-height: 20.08px;
  }
`;

const Body = styled.div`
padding-top: 4rem;
  display: flex;
  justify-content: space-around;

  .list {
    ul {
      padding-left: 0;
      text-align: left;
      list-style-type: none;
    }
  }
`;

export default Footer;
