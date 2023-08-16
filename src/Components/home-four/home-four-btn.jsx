import React from "react";
import { motion } from "framer-motion";

const HomeFourBtn = (props) => {
  const buttonVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      className="  lg:px-5 flex items-center lg:py-3 md:px-3 md:py-2 px-5 py-3 mt-6 overflow-hidden relative md:mt-2 lg:ml-80 md:ml-20 ml-0 rounded-3xl bg-orange-600 text-white font-[poppins] hover:bg-orange-300 duration-300"
    >
      {props.children}
      Register now
    </motion.button>
  );
};

export default HomeFourBtn;
