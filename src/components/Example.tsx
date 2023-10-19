import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

const Example = () => {
  return (
    <MotionBox
      height="50px"
      bg="blue.350"
      drag="x"
      dragConstraints={{ left: -110, right: 110 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
};

export default Example;
