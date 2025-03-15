import React from "react";
import "../Greeting.scss";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  head: string;
  message: string;
  onError: (error: { name: string | null; message: string | null }) => void;
}

export const ErrorMessage: React.FC<Props> = ({ message, head, onError }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="error"
        initial={{
          opacity: 0,
          x: "-75%",
        }}
        animate={{
          opacity: 1,
          x: "0",
        }}
        exit={{
          opacity: 0,
          x: "-75%",
        }}
      >
        <button
          className="error__button"
          onClick={() => onError({ name: null, message: null })}
        >
          X
        </button>
        <h2 style={{ fontStyle: "italic", fontWeight: 800 }}>{`"${head}`}</h2>
        {message}
      </motion.div>
    </AnimatePresence>
  );
};
