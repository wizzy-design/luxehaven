import styled from "styled-components";
// import blackDiagArrow from "../../assets/icons/blackDiagonalArrow.svg";

const AboutUs = () => {
  return (
    <Parent>
      <AboutUss>
        <div className="title">
          <h1>ABOUT US</h1>
        </div>
        <div className="body">
          <p>
            This is not just an apartment, but a special space. It must be
            perfect in every detail! We are sure that the aesthetics of your
            “home” while trip should reflect your personality and lifestyle.
            This is the place <br />
            where you find inspiration to implement ideas and gain energy your
            dreams, This is a place that helps you unleash your creative
            potential!
          </p>
          <br />

          <p>
            You can find impeccable venues on this platform. Top designers from
            all over the world worked on their interiors, creating truly stylish
            and special projects. Why is aesthetics so important to us?
          </p>
        </div>
        <div className="button">
          <button id="readmore">
            Read More{" "}
            <span className="svg">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.06348 1C2.06348 0.734784 2.16968 0.48043 2.3587 0.292893C2.54773 0.105357 2.8041 0 3.07142 0H11.1349C11.4022 0 11.6586 0.105357 11.8476 0.292893C12.0367 0.48043 12.1428 0.734784 12.1428 1V9C12.1428 9.26522 12.0367 9.51957 11.8476 9.70711C11.6586 9.89464 11.4022 10 11.1349 10C10.8676 10 10.6112 9.89464 10.4222 9.70711C10.2332 9.51957 10.127 9.26522 10.127 9V3.414L1.76816 11.707C1.57806 11.8892 1.32345 11.99 1.05918 11.9877C0.794898 11.9854 0.542095 11.8802 0.355216 11.6948C0.168336 11.5094 0.0623322 11.2586 0.0600357 10.9964C0.0577392 10.7342 0.159334 10.4816 0.342938 10.293L8.70175 2H3.07142C2.8041 2 2.54773 1.89464 2.3587 1.70711C2.16968 1.51957 2.06348 1.26522 2.06348 1Z"
                  fill="#100D18"
                />
              </svg>
            </span>
          </button>
        </div>
      </AboutUss>
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  background: #100d18;
  padding: 0 5rem;
`;

const AboutUss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 3rem;
  font-family: "Mulish", sans-serif;

  .title h1{
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 3rem;
  }

  .body {
    text-align: center;
    color: #c7c6c6;
    width: 75%;

    p {
      font-size: 1.1rem;
      margin: 0;
      line-height: 30.12px;
    }
  }

  .button {
    margin: 2.5rem 0 1.5rem 0;

    #readmore {
      padding: 0.8rem 1.8rem;
      color: #100d18;
      border: none;
      border-radius: 2px;
      outline: none;
      font-family: "Mulish", sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      background: #fff;
      transition: all ease 0.5s;
      cursor: pointer;

      .svg {
        margin-left: 0.5rem;
      }

      &:hover {
        background-color: #100d18;
        color: #fff;
        border: 1px solid #fff;

        path {
          fill: #fff;
        }
      }
    }
  }
`;

export default AboutUs;
