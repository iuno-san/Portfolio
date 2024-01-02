import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  const [text, setText] = useState("©Iuno");

  const handleClick = () => {
    setText("©Iuno San");
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }} 
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;