/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const ProImg = ({ img, title, body }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      const elementRect = element.getBoundingClientRect();
      const isInView =
        elementRect.left < window.innerWidth && elementRect.right >= 0;

      setIsVisible(isInView);
    };

    // handleScroll(); // Initial check on component mount

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Parent isVisible={isVisible}>
      <div className="image">
        <img src={img} alt="Images" />
      </div>
      <div className="desc">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Parent>
  );
};

// Styled Components
const Parent = styled.div`
  .image {
    img {
      width: 20rem;
      height: 17rem;
      object-fit: cover;
    }
    opacity: ${(props) => (props.isVisible ? 1 : 0.5)};
    transition: opacity 0.5s ease;
  }

  .desc {
    font-family: "Mulish", sans-serif;

    h2 {
      margin: 0.5rem 0 0 0;
      font-weight: 300;
      font-size: 2rem;
      color: #fff;
      line-height: 55.22px;
    }

    p {
      margin: 0;
      width: 20rem;
      color: #c7c6c6;
      line-height: 20.08px;
    }
  }
`;

export default ProImg;
