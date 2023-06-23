import styled from "styled-components";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Nav = ({ handleClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // HandleScroll function handles color change of NavBar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 600;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Parent scrolled={scrolled}>
      <nav>
        <div className="logo" onClick={handleClick}>
          Luxehaven
        </div>
        <ul>
          <li>
            Home
            <span></span>
          </li>
          <li>
            Properties<span></span>
          </li>
          <li>
            About Us<span></span>
          </li>
          <li>
            Contact<span></span>
          </li>
          <li>
            Login<span></span>
          </li>
          <button id="signup">Sign Up</button>
        </ul>
      </nav>
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  width: 100%;
  position: fixed;
  transition: background ease 0.2s;
  background: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      : "none"};
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    color: ${({ scrolled }) => (scrolled ? "#100d18" : "#fff")};
    overflow: hidden;
  }

  .logo {
    margin: 1rem 0;
    font-family: 'GFS Didot', serif;
    font-size: 32px;
    font-weight: 400;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Mulish", sans-serif;
      font-weight: 400;
      list-style-type: none;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        span {
          width: 35px;
          margin-top: 1px;
          border-radius: 1.5px;
          background-color: ${({ scrolled }) =>
            scrolled ? "#100d18" : "#fff"};
          transition: all ease 0.5s;
        }
      }

      span {
        height: 1.5px;
      }
    }
    #signup {
      padding: 0.8rem 1.8rem;
      color: ${({ scrolled }) => (scrolled ? "#100d18" : "#fff")};
      border: ${({ scrolled }) =>
        scrolled ? "1px solid #100d18" : "1px solid #fff"};
      border-radius: 2px;
      outline: none;
      font-family: "Mulish", sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      background: transparent;
      transition: all ease 0.5s;
      cursor: pointer;

      &:hover {
        background-color: ${({ scrolled }) => (scrolled ? "#100d18" : "#fff")};
        color: ${({ scrolled }) => (scrolled ? "#fff" : "#100d18")};
      }
    }
  }
`;

export default Nav;
