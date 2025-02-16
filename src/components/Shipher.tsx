import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

enum Methods {
  shipher = "shipher",
  unShif = "antiShipher",
}

export const Shipher: React.FC = () => {
  const [method, setMethod] = useState<Methods>(Methods.shipher);
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcess, setProcess] = useState<boolean>(false);

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    if (message.length === 0 || typeof message !== "string") {
      setError("введений текст невалідний, читай описаніє дібіл1");
      return;
    }
    setError(null);
    setProcess(true);

    setTimeout(() => {
      if (method === Methods.shipher) {
        setResponse(setShipher(message, setError));
      } else {
        setResponse(unShipher(message, setError));
      }
      setProcess(false);
    }, 5000);
  }
  return (
    <>
      {isProcess ? (
        <AnimatePresence>
          <motion.img
            key='matrix'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1, transition: { duration: 1 }
            }}
            exit={{
                opacity: 0, transition: { duration: 1 }
            }}
            src="img/matrix.gif"
            alt="matrix"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              zIndex: "-1",
            }}
          />
        </AnimatePresence>
      ) : (
        <>
          {" "}
          <img
            style={{
              position: "absolute",
              left: "0",
            }}
            src="img/anonimus_meme.gif"
            alt="not found"
          />
          <img
            style={{
              position: "absolute",
              right: "0",
            }}
            src="img/anonimus_meme.gif"
            alt="not found"
          />
        </>
      )}
      <div
        className="shipher"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {response && (
          <>
            <h2>Получилось!</h2>
            <div
              style={{
                backgroundColor: "#000",
                borderRadius: "10px",
                maxWidth: "75vh",
                padding: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <p>{response}</p>
            </div>
          </>
        )}
        <div>
          <button
            onClick={() => {
              setResponse(null);
              setMessage("");
              setError(null);
              return setMethod(Methods.shipher);
            }}
          >
            Створить шифр
          </button>
          <button
            onClick={() => {
              setResponse(null);
              setMessage("");
              setError(null);
              return setMethod(Methods.unShif);
            }}
          >
            Розшифрувати
          </button>
        </div>

        {method === Methods.shipher ? (
          <form onSubmit={handleSumbit}>
            <h1>Зашифрувати</h1>
            <input
              type="text"
              placeholder="пиши сюда"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">GO</button>
          </form>
        ) : (
          <form onSubmit={handleSumbit}>
            <h1>Розшифрувати</h1>
            <input
              type="text"
              placeholder="пиши сюда"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">GO</button>
          </form>
        )}
        {error && (
          <div
            style={{
              width: "50vh",
              height: "15vh",
              backgroundColor: "rgb(255, 0, 0)",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}
        <p
          style={{
            maxWidth: "80vh",
          }}
        >
          Можна використоувати тільки латиньскі буки без будьяких символів і
          цифр. Додати адаптацію для укр мови, спец символів і цифр можна за 15
          хв. Але проблема в тому що тут треба думати, а я цього не люблю
        </p>
      </div>
    </>
  );
};

function setShipher(
  message: string,
  onError: (v: string) => void
): string | null {
  const shipherLetters = "!@#$%^&*©™Ω•®€£¥§¶|~)-{}[]".split("");
  const messageLetters = message.split("").reverse();
  let result = "";

  for (let i = 0; i < messageLetters.length; i++) {
    if (messageLetters[i] === " ") {
      result += "+";
      continue;
    }

    const numberLetter = messageLetters[i].toUpperCase().charCodeAt(0) - 65;

    if (numberLetter < 0 || numberLetter >= shipherLetters.length) {
      onError("введений текст невалідний, читай описаніє дібіл2");
      return null;
    }

    result += shipherLetters[numberLetter];
  }
  console.log(result);
  return result;
}

function unShipher(
  message: string,
  onError: (v: string) => void
): string | null {
  const shipherLetters = "!@#$%^&*©™Ω•®€£¥§¶|~)-{}[]".split("");
  let result = "";

  for (const char of message.split("")) {
    if (char === "+") {
      result += " ";
      continue;
    }

    const charNumber = shipherLetters.indexOf(char);

    if (charNumber === -1) {
      onError("введений текст невалідний, читай описаніє дібіл3");
      return null;
    }

    result += String.fromCharCode(charNumber + 65);
  }

  console.log(result.split("").reverse().join(""));
  return result.split("").reverse().join("");
}

