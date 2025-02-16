import { useState } from "react";
enum Methods {
  shipher = "shipher",
  unShif = "antiShipher",
}

export const Shipher: React.FC = () => {
  const [method, setMethod] = useState<Methods>(Methods.shipher);
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    if (message.length === 0 || typeof message !== "string") {
        setError('text in input are invalid')
      return;
    }

    if (method === Methods.shipher) {
        setError(null);
      setResponse(setShipher(message, setError));
    } else {
        setError(null);
      setResponse(unShipher(message, setError));
    }
  }
  return (
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
          <h2>Succesful!</h2>
          <div
            style={{
              backgroundColor: "#000",
              borderRadius: "10px",
              maxWidth: '75vh',
              padding: '1.5rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: '50px',
            }}
          >
            <p>{response}</p>
          </div>
        </>
      )}
      <div>
        <button onClick={() => setMethod(Methods.shipher)}>
          Create a shipher
        </button>
        <button onClick={() => setMethod(Methods.unShif)}>
          Translate a shipher
        </button>
      </div>

      {method === Methods.shipher ? (
        <form onSubmit={handleSumbit}>
          <h1>Create a shipher</h1>
          <input
            type="text"
            placeholder="enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      ) : (
        <form onSubmit={handleSumbit}>
          <h1>Translate a shipher</h1>
          <input
            type="text"
            placeholder="enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Translate</button>
        </form>
      )}
      {error && (
        <div style={{
            width: '50vh',
            height: '15vh',
            backgroundColor: 'rgb(255, 0, 0)',
            borderRadius: '15px',
            textAlign: 'center',
        }}>{error}</div> 
      )}
      <p style={{
        maxWidth: '80vh',
      }}>Можна використоувати тільки латиньскі буки без будьяких символів і цифр.
        Додати адаптацію для укр мови, спец символів і цифр можна за 15 хв. Але проблема в тому що тут треба думати,
        а я цього не люблю
      </p>
    </div>
  );
};

function setShipher(message: string, onError: (v: string) => void): string | null {
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
        onError('created text are invalid');
        return null;
    }

    result += shipherLetters[numberLetter];
  }
  console.log(result);
  return result;
}

function unShipher(message: string, onError: (v: string) => void): string | null {
  const shipherLetters = "!@#$%^&*©™Ω•®€£¥§¶|~)-{}[]".split("");
  let result = "";

  for (const char of message.split("")) {
    if (char === "+") {
      result += " ";
      continue;
    }

    const charNumber = shipherLetters.indexOf(char);

    if (charNumber === -1) {
        onError('created text are invalid');
        return null;
    }

    result += String.fromCharCode(charNumber + 65);
  }

  console.log(result.split("").reverse().join(""));
  return result.split("").reverse().join("");
}
