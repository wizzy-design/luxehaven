import styled from "styled-components";
import display from "../../assets/img/faq.png";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

const Faq = () => {
  return (
    <Parent>
      <h1 className="title">FAQ</h1>
      <div className="body">
        <div className="img">
          <img src={display} alt="FAQ" />
        </div>
        <LayoutGroup>
          <div className="faqs">
            <Toggle title="Is there a mobile app for Luxehaven?" line={true}>
              <p className="answer">
                Go to the page of individual apartments, find out all the
                necessary details and click on the “Rent” button, You will be
                able to pay for the reservation in the next step.
              </p>
            </Toggle>
            <Toggle title="How can  I rent apartments on Luxehaven?">
              <p className="answer">
                Go to the page of individual apartments, find out all the
                necessary details and click on the “Rent” button, You will be
                able to pay for the reservation in the next step.
              </p>
            </Toggle>
            <Toggle title="What types of properties can I find on Luxehaven?">
              <p className="answer">
                Go to the page of individual apartments, find out all the
                necessary details and click on the “Rent” button, You will be
                able to pay for the reservation in the next step.
              </p>
            </Toggle>
            <Toggle title="How can I place my apartment on the platform?">
              <p className="answer">
                Go to the page of individual apartments, find out all the
                necessary details and click on the “Rent” button, You will be
                able to pay for the reservation in the next step.
              </p>
            </Toggle>
            <Toggle title="In which countries does Luxehaven work?">
              <p className="answer">
                Go to the page of individual apartments, find out all the
                necessary details and click on the “Rent” button, You will be
                able to pay for the reservation in the next step.
              </p>
            </Toggle>
          </div>
        </LayoutGroup>
      </div>
    </Parent>
  );
};

// Styled Componenets
const Parent = styled.div`
  background: #303539;
  padding: 1rem 5rem 3rem 5rem;

  .title {
    margin-bottom: 4rem;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 3rem;
    font-family: "'Mulish', sans-serif;", sans-serif;
  }

  .body {
    display: flex;
    justify-content: center;
    gap: 4rem;
    color: #c7c6c6;

    .img {
      display: inline-block;
      img {
        width: 22rem;
      }
    }

    .faqs {
      width: 45%;
      .questions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #c7c6c6;
        cursor: pointer;
        margin: 0.8rem 0;
        font-size: 1.2rem;
        font-weight: 400;
        font-family: "Mulish", sans-serif;

        img {
          width: 1.5rem;
          padding: 0.3rem;
          border: 0.5px solid #fff;
          border-radius: 50%;
          transition: all ease 0.5s;
        }

        .rotated {
          transition: all ease 0.5s;
          transform: rotate(-45deg);
        }
      }
      .answer {
        color: #a1a1a1;
        width: 80%;
        font-size: 1.1rem;
        font-family: "Mulish", sans-serif;
        line-height: 30.12px;
      }
      .faq-line {
        width: 100%;
        height: 1px;
        background-color: #a1a1a1;
      }
    }
  }
`;

export default Faq;
