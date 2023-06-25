/* eslint-disable react/prop-types */
import styled from "styled-components";
import { motion } from "framer-motion";

const ProImg = ({ img, title, body }) => {
  return (
    <Parent>
      <motion.div
        className="image"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img src={img} alt="Images" />
      </motion.div>
      <div className="desc">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Parent>
  );
};

// Styled Components
const Parent = styled(motion.div)`
  .image {
    img {
      width: 20rem;
      height: 17rem;
      object-fit: cover;
    }
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
