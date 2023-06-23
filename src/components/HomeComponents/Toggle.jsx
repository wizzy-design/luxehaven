/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title, line }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      {line ? <div className="faq-line"></div> : <></>}
      <motion.h4 layout className="questions">
        {title}
      </motion.h4>
      {toggle ? children : " "}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
