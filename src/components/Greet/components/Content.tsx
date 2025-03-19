import React from "react";

export const Content: React.FC = () => {
  return (
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
  );
};

