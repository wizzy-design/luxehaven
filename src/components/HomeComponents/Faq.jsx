import styled from "styled-components";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";

const Faq = () => {
  return (
    <Parent>
      <h1 className="title">FAQ</h1>
      <div className="body">
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
  background: #101010;
  padding: 1rem 10rem 3rem 9.8rem;

  .title {
    margin-bottom: 4rem;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 2.5rem;
    font-family: Bonky free personal use;
  }

  .body {
    color: #c7c6c6;

    .faqs {
      /* width: 70%; */
      .questions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #a1a1a1;
        cursor: pointer;
        margin: 0.8rem 0;
        font-size: 1.1rem;
        font-weight: 400;
        font-family: "Montaga", sans-serif;
        img {
          width: 1rem;
          padding: 0.3rem;
          border: 0.5px solid #a1a1a1;
          border-radius: 50%;
          transition: all ease 0.5s;
        }

        .rotated {
          transition: all ease 0.5s;
          transform: rotate(-45deg);
        }
      }
      .answer {
        color: #afafaf;
        width: 80%;
        font-size: 1rem;
        font-family: "Montaga", sans-serif;
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
