/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import whiteArrow from "../../assets/icons/whiteFaqArrow.svg";

const Toggle = ({ children, title, line }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      {line ? <div className="faq-line"></div> : <></>}
      <motion.h4 layout className="questions">
        {title}
        <img src={whiteArrow} alt="FAQ arrow" className={toggle ? "rotated" : ""}/>
      </motion.h4>
      {toggle ? children : " "}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
