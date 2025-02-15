import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./App.css";
import { style } from "framer-motion/client";

const menuData = ["short", "veeeeeery long", "Normal Item"];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div
      style={{

        backgroundColor: "#eee",
        borderRadius: "25px",
        display: "flex",
        padding: '1rem',
      }}
    >
      {menuData.map((item, itemIndex) => {
        return (
          <MenuItem
            key={item}
            item={item}
            isSelected={index === itemIndex}
            handleClick={() => setIndex(itemIndex)}
          />
        );
      })}
    </div>
  );
}

export default App;

function MenuItem(props) {
  const { item, isSelected, handleClick } = props;

  return (
    <motion.div
      style={{
        fontWeight: "900",
        margin: "0 0.5rem",
        position: 'relative',
      }}
      initial={{
        color: "#000",
      }}
      animate={{
        color: isSelected ? "rgb(255, 0, 0)" : "#000",
      }}
      onClick={handleClick}
    >
      {isSelected && <ActiveLine />}
      {item}
    </motion.div>
  );
}

function ActiveLine() {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        width: "calc(100% - 10px)",
        height: "5px",
        backgroundColor: "rgb(255, 0, 0)",
        position: "absolute",
        bottom: "-6px",
        left: '5px',
      }}
    />
  );
}
