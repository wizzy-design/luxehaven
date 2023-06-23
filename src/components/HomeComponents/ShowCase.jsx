/* eslint-disable react/prop-types */
// Dependencies
import styled from "styled-components";

const ShowCase = (props) => {
  return (
    <Parent>
      <Head>
        <h1 className="title">{props.title}</h1>
        <div>
          <button id="view_all">
            View all{" "}
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
                  fill={props.fill}
                />
              </svg>
            </span>
          </button>
        </div>
      </Head>
      <Body>
        <img src={props.img} alt="Display Image" />
        <h2>“Grand Budapest” {props.label}</h2>
      </Body>
      <Arrows>
        <button>
          <img src={props.arrow1} alt="First Arrow" />
        </button>
        <button>
          <img src={props.arrow2} alt="Second Arrow" />
        </button>
      </Arrows>
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 5rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .title {
    font-family: "Mulish", sans-serif;
    font-size: 3rem;
    padding-bottom: 1rem;
    font-weight: 600;
  }

  #view_all {
    padding: 0.8rem 1.8rem;
    color: #100d18;
    border: 1px solid #100d18;
    border-radius: 2px;
    outline: none;
    font-family: "Mulish", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    background: transparent;
    transition: all ease 0.5s;
    cursor: pointer;

    .svg {
      margin-left: 0.5rem;
    }

    &:hover {
      color: #fff;
      border: 1px solid #100d18;
      background: #100d18;

      svg path {
        fill: #fff;
      }
    }
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
  }
  h2 {
    position: absolute;
    font-family: "Mulish", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    bottom: 0;
    left: 10rem;
  }
`;

const Arrows = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  gap: 0.5rem;

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    img {
      width: 40px;
    }
  }
`;
export default ShowCase;
