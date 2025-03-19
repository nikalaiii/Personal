import React, { useState, useEffect, useRef } from "react";
import "../Greeting.scss";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const headings = ["Ну що ж...", "name", "Вітаємо!!!"];

export const AnimateGreet: React.FC = () => {
    const [currentHeading, setCurrentHeading] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [playMusic, setPlayMusic] = useState<boolean>(false);
    
    const audioRef = useRef<HTMLAudioElement>(null);
    const formData = useSelector((state) => state.formData);
  
    useEffect(() => {
      if (playMusic) {
        const intervalId = setInterval(() => {
            if (index < headings.length) {
              setCurrentHeading(headings[index]);
              setIndex(index + 1);
            } else {
              clearInterval(intervalId);
            }
          }, 3000);
      
          return () => clearInterval(intervalId);
      }
    }, [index, playMusic]);
  
    const toggleAudio = () => {
      if (audioRef.current) {
        if (playMusic) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch((err) => console.warn("Audio play blocked:", err));
        }
        setPlayMusic(!playMusic);
      }
    };
  

  return (
    <AnimatePresence mode="wait">
         <audio ref={audioRef} src="greet.mp3" loop />
        <button onClick={toggleAudio} style={{ fontSize: 20, padding: "10px 20px" }}>
          lets go
        </button>
      {playMusic && <div
        className="animate"
        style={{
            zIndex: '999',
          backgroundColor: "white",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
       
        {currentHeading && (
          <motion.h1
            key={currentHeading}
            initial={{ opacity: 0, y: "-20%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "+20%" }}
            transition={{ duration: 0.5 }}  
            style={{
              fontSize: "200px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              textAlign: "center",
              margin: 0,
            }}
            className="animTitle"
          >
            {currentHeading === "name" ? `${formData.name}...` : currentHeading}
          </motion.h1>
        )}

        {currentHeading === "Вітаємо!!!" && (
          <>
            <motion.img
              initial={{ opacity: 0, y: "-20%"}}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "+20%" }}
              src="img/cat_gif1.gif"
              alt="cat"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <motion.img
              initial={{ opacity: 0, y: "-20%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "+20%" }}
              src="img/cat_gif3.gif"
              alt="cat"
              style={{
                position: "absolute",
                top: 0,
                left: "-50%,",
              }}
            />
          </>
        )}
      </div>}
    </AnimatePresence>
  );
};
