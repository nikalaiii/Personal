import React, { useState } from "react";
import "./Greeting.scss";
import classNames from "classnames";
import { RadioSelect } from "./components/RadioSeelct";
import { Select } from "./components/Select";
import { TextInput } from "./components/TextInput";
import { ErrorMessage } from "./components/ErrorMessage";
import { handleSubmit } from "./functions/handleSubmit";
import { Captcha } from "./components/Captcha";
import { Result } from "./components/Result";

export interface FormState {
  name: string;
  email: string;
  nation: string;
  sex: string;
  drink: string;
  size: string;
  game: string;
  lang: string;
}

export const Greeting: React.FC = () => {
  const [error, setError] = useState({ name: null, message: null });
  const [captcha, setCaptcha] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    nation: "",
    sex: "",
    drink: "",
    size: "",
    game: "",
    lang: "",
  });

  const changeInfo = (newKey: string, value: string) => {
    setFormData((prev) => ({ ...prev, [newKey]: value }));
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="section"
    >
      {error.name && error.message && (
        <ErrorMessage
          head={error.name}
          message={error.message}
          onError={setError}
        />
      )}

      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "black" }}>
          {registered ? 'Вітаємо' : 'Реєстрація'}
        </h1>
        {registered ? (
          <Result formInfo={formData} />
        ) : (
          <form
            style={{
              backgroundColor: "#f5f5f5",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
            className={classNames("box", "box custom-shadow")}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData, setError, setCaptcha);
            }}
          >
            <TextInput
              title="Ваше "
              titleName="name"
              type="name"
              onChange={changeInfo}
              value={formData.name}
            />

            <TextInput
              title="Ваш "
              titleName="email"
              type="email"
              onChange={changeInfo}
              value={formData.email}
            />

            <TextInput
              title="Улюблена "
              titleName="game"
              type="game"
              onChange={changeInfo}
              value={formData.game}
            />

            <div className="wrapper">
              <Select
                title="Національність"
                type="nation"
                options={["Українець", "Поляк", "Русский", "Єврей"]}
                onChange={changeInfo}
              />

              <Select
                title="Розмір вашого "
                titleName="penis"
                type="size"
                options={["5-cm", "10+cm", "20+cm", "(π * 100) - 414"]}
                onChange={changeInfo}
              />
            </div>

            <div className="wrapper" style={{ gap: "80px", marginTop: "30px" }}>
              <RadioSelect
                type="sex"
                onChange={changeInfo}
                title="Стать"
                queshions={["Maaan", "Baba", "інше", "dead inside"]}
              />

              <RadioSelect
                type="drink"
                onChange={changeInfo}
                title="Чай, чи Кава?"
                queshions={["чай", "кава", "інше", "живчик"]}
              />

              <RadioSelect
                type="lang"
                onChange={changeInfo}
                title="C++/C# Чи JS/TS ???"
                queshions={["C++", "C#", "JS", "TS"]}
              />
            </div>

            <button className="button is-primary is-small">Надіслати</button>
          </form>
        )}
      </div>

      {captcha && !registered && (
        <>
          <div className="mask" />
          <Captcha onSucces={setRegistered} onError={setError} />
        </>
      )}
    </section>
  );
};
