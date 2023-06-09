import styled from "styled-components";

const Nav = () => {
  return (
    <Parent>
      <div className="logo">Luxehaven</div>
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
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  display: flex;
  background: transparent;
  z-index: 10;
  color: #ffffff;

  .logo {
    margin: 1rem 0;
    font-family: Didot;
    font-size: 32px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Mulish;
      list-style-type: none;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        span {
          width: 35px;
          margin-top: 1px;
          border-radius: 1.5px;
          background-color: #ffffff;
          transition: all ease 0.5s;
        }
      }

      span {
        height: 1.5px;
      }
    }
    #signup {
      padding: 0.8rem 1.8rem;
      color: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 2px;
      outline: none;
      font-family: Mulish;
      font-size: 1rem;
      text-transform: uppercase;
      background: transparent;
      transition: all ease 0.5s;
      cursor: pointer;

      &:hover {
        background-color: #ffffff;
        color: #515d86;
      }
    }
  }
`;

export default Nav;
