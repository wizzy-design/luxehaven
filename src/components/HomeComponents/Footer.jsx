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
          <h1>Live your </h1>
          <h1>dream home</h1>
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
        <div className="list list1">
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
            <br />
            <br />
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
      <Last>
        <div className="line"></div>
        <div className="foot">2023 Luxehaven Apartments &copy;</div>
      </Last>
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  padding: 5rem 0 0 0rem;
  color: #d6d5d5;
  background: #303539;
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

const Body = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  justify-content: center;
  gap: 6.5rem;

  .list {
    h2 {
      font-weight: 500;
      font-family: "Montaga", sans-serif;
      color: #bebebe;
    }
    ul {
      padding-left: 0;
      text-align: left;
      list-style-type: none;
      li {
        line-height: 25.08px;
        font-family: "Montaga", sans-serif;
        color: #bebebe;
      }
    }
  }

  .list1 {
    h2 {
      margin: 19.92px 0;
      font-size: 1.8rem;
      color: #ffffff;
      font-weight: 400;
      font-family: "GFS Didot", serif;
    }
    .list-icons {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      img {
        width: 2rem;
      }
    }
  }
`;

const Last = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    margin: 2rem 0 1.5rem 0;
    width: 80%;
    height: 1px;
    background-color: #a1a1a1;
  }
  .foot {
    font-family: "Montaga", sans-serif;
    color: #bebebe;
    padding: 0 0 2rem 0;
  }
`;

export default Footer;
