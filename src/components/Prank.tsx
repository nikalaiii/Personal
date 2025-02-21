import React, { useState, useEffect, useRef } from "react";

export const Prank = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [scremmer, setScremmer] = useState<boolean>(false);

  useEffect(() => {
    const checkFullScreen = () => {
      setIsFullScreen(
        window.innerHeight === screen.height && window.innerWidth === screen.width
      );
    };

    window.addEventListener("resize", checkFullScreen);
    checkFullScreen(); // Викликати при першому рендері
    return () => window.removeEventListener("resize", checkFullScreen);
  }, []);

  const audioRef = useRef(null);

  useEffect(() => {
    if (scremmer && audioRef.current) {
      audioRef.current.play();
      setTimeout(() => setScremmer(false), 5000); // вимкнути після 5 секунд
    }
  }, [scremmer]);

  return (
    <>
      {isFullScreen ? (
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "15px",
              background: "#333",
              height: '100%',
            }}
          >
            <img
              style={{
                height: '80px',
                width: '200px',
                objectFit: "cover",
                position: 'absolute',
                left: '0',
                top: '0',
              }}
              src="img/rospusta.png"
              alt="ROSPUSTA"
            />
            {["Головна", "Про нас", "Послуги", "Контакт з Нами"].map((btn) => (
              <button
                key={btn}
                style={{
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setScremmer(true)}
              >
                {btn}
              </button>
            ))}
          </nav>

          <header
            style={{
              textAlign: "center",
              padding: "30px 0",
              background: "#f7971d",
            }}
          >
            <h1 style={{ color: "black" }}>Welcome to Our Site</h1>
          </header>

          <main style={{ padding: "20px", lineHeight: "1.6" }}>
            <p style={{ margin: "60px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              reprehenderit accusamus animi? Libero nemo placeat velit itaque
              assumenda inventore, fugit officia animi perferendis quasi
              facilis, nam necessitatibus non sequi dolorum totam corrupti
              molestiae adipisci natus illo rem excepturi quae. Mollitia!
            </p>
            <p style={{ margin: "60px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              similique culpa velit vel soluta minima quos impedit quibusdam
              iure voluptas tempora, consequatur ratione, dignissimos
              laudantium facilis libero accusamus maiores.
            </p>
          </main>

          <footer
            style={{
              textAlign: "center",
              padding: "15px",
              background: "#333",
              color: "white",
            }}
          >
            <a href="https://www.pornhub.com" style={{
                color: 'white',
                textDecoration: 'none',
            }}>Контакт з нами</a>
          </footer>
        </div>
      ) : (
        <p>Ти знаходишся не в повноекранному режимі, дизайн може зламатись, нажми F11</p>
      )}

      {scremmer && (
        <>
          <img
            src="img/scremmer.jpg"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '100%',
              width: '100%',
            }}
          />
          <audio ref={audioRef} src="monster-scream-death-101123.mp3" />
        </>
      )}
    </>
  );
};
