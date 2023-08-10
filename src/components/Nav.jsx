/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Nav = ({ handleClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // HandleScroll function handles color change of NavBar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
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
        <Right scrolled={scrolled}>
          <ul>
            {/* First Element */}
            <li>
              <a href="#" id="text">
                Find your home
              </a>
            </li>
            {/* Second Element: Globe icon */}
            <li>
              <a href="#">
                {/* <img src={language} id="lang" alt="Globe icon" /> */}
                <svg
                  id="lang_container"
                  width="40"
                  height="40"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame">
                    <path
                      id="lang"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.5 9C15.0443 9 9 15.0443 9 22.5C9 29.9557 15.0443 36 22.5 36C29.9557 36 36 29.9557 36 22.5C36 15.0443 29.9557 9 22.5 9ZM10.8569 21.8864H16.6803C16.803 18.1591 18.0303 15.1486 19.249 13.0451C19.7276 12.2204 20.2062 11.5319 20.6223 10.9919C15.2714 11.8583 11.1428 16.3636 10.8569 21.8864ZM16.711 23.7273H10.9047C11.1745 26.2688 12.2716 28.6514 14.0272 30.5088C15.7829 32.3663 18.0999 33.5957 20.6223 34.0081C20.1211 33.3538 19.6623 32.668 19.249 31.9549C18.0978 29.968 16.9405 27.1722 16.711 23.7273ZM18.5568 23.7273H26.4432C26.2186 26.7709 25.1914 29.25 24.158 31.0308C23.5739 32.0371 22.9921 32.8165 22.5577 33.338L22.5 33.4105L22.4423 33.3405C21.8463 32.6167 21.311 31.845 20.842 31.0332C19.8086 29.25 18.7801 26.7685 18.5568 23.7273ZM26.4776 21.8864H18.5224C18.6451 18.5629 19.7399 15.8678 20.842 13.9692C21.4261 12.9629 22.0079 12.1835 22.4423 11.662L22.5 11.5895L22.5577 11.6595C22.9909 12.1823 23.5739 12.9604 24.158 13.9668C25.2601 15.8666 26.3549 18.5617 26.4776 21.8851V21.8864ZM28.289 23.7273C28.0608 27.1722 26.9022 29.968 25.751 31.9549C25.2724 32.7796 24.7938 33.4681 24.379 34.0081C26.9008 33.5952 29.2174 32.3656 30.9725 30.5082C32.7277 28.6508 33.8244 26.2685 34.094 23.7273H28.289ZM34.1431 21.8864H28.3197C28.197 18.1591 26.9697 15.1486 25.751 13.0451C25.2724 12.2204 24.7938 11.5319 24.3777 10.9919C29.7286 11.8583 33.8572 16.3636 34.1431 21.8864Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </li>
            {/* Third Element: Burger */}
            <li>
              <a href="#" id="burg_anchor">
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame 370">
                    <g id="Group 1171274717">
                      <path
                        className="burger"
                        id="Line 1"
                        d="M2 5.625H15.5"
                        stroke="white"
                        stroke-width="2.18919"
                        stroke-linecap="round"
                      />
                      <path
                        className="burger"
                        id="Line 3"
                        d="M15.5 21.0527L29 21.0527"
                        stroke="white"
                        stroke-width="2.18919"
                        stroke-linecap="round"
                      />
                      <path
                        className="burger"
                        id="Line 2"
                        d="M2 13.3398H29"
                        stroke="white"
                        stroke-width="2.18919"
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </Right>
      </nav>
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  width: 100%;
  position: fixed;
  transition: background ease 0.2s;
  background: ${({ scrolled }) => (scrolled ? "#D6D2CE" : "transparent")};
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      : "none"};
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 5rem;
    overflow: hidden;
  }

  .logo {
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: 400;
    cursor: pointer;
    color: ${({ scrolled }) => (scrolled ? "#303539" : "#fff")};
    font-family: Bonky free personal use;
    font-style: normal;
  }
`;

const Right = styled.div`
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    height: 1rem;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    color: ${({ scrolled }) => (scrolled ? "#303539" : "#fff")};
    font-family: "Montaga", sans-serif;
    font-size: 1rem;
    transition: background-color 0.5s ease;
  }

  /* Individual anchor elements */
  #text {
    padding: 0.6rem 0.8rem;
    &:hover {
      background-color: #6c89a0;
      border-radius: 2rem;
    }
  }

  #lang {
    width: 36px;
    height: 36px;
    fill: ${({ scrolled }) => (scrolled ? "#303539" : "#fff")};
  }

  .burger {
    width: 24.8px;
    height: 21.59px;
    stroke: ${({ scrolled }) => (scrolled ? "#303539" : "#fff")};
  }

  #lang_container,
  #burg_anchor {
    &:hover {
      background-color: #6c89a0;
      border-radius: 50%;
    }
  }
`;

export default Nav;
