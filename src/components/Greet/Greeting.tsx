import React, { useState } from "react";
import "./Greeting.scss";
import classNames from "classnames";
import { RadioSelect } from "./components/RadioSeelct";
import { Select } from "./components/Select";
import { TextInput } from "./components/TextInput";
import { ErrorMessage } from "./components/ErrorMessage";
import { handleSubmit } from "./functions/handleSubmit";
import { useSelector, useDispatch } from "react-redux";
import { Captcha } from "./components/Captcha";
import { ErrorState, setError } from "../../features/errorSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const Greeting: React.FC = () => {
  const [captcha, setCaptcha] = useState<boolean>(false);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const error = useSelector(state => state.error);
  const location = useLocation();
  const navigate = useNavigate();

  const changeError = (err: ErrorState) => {
    dispatch(setError(err));
  } 

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
          onError={changeError}
        />
      )}

      <div className="container">
        <h1 className="title has-text-centered" style={{ color: "black" }}>
          {location.pathname === '/greeting/result' ? "Вітаємо" : "Реєстрація"}
        </h1>
        {location.pathname === '/greeting/result' ? (
          <Outlet />
        ) : (
          <form
            style={{
              backgroundColor: "#f5f5f5",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
            className={classNames("box", "box custom-shadow")}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData, changeError, setCaptcha);
            }}
          >
            <TextInput
              title="Ваше "
              titleName="name"
              type="name"
              value={formData.name}
            />

            <TextInput
              title="Ваш "
              titleName="email"
              type="email"
              value={formData.email}
            />

            <TextInput
              title="Улюблена "
              titleName="game"
              type="game"
              value={formData.game}
            />

            <div className="wrapper">
              <Select
                title="Національність"
                type="nation"
                options={["Українець", "Поляк", "Русский", "Єврей"]}
              />

              <Select
                title="Розмір вашого "
                titleName="penis"
                type="size"
                options={["5-cm", "10+cm", "20+cm", "(π * 100) - 414"]}
              />
            </div>

            <div className="wrapper" style={{ gap: "80px", marginTop: "30px" }}>
              <RadioSelect
                type="sex"
                title="Стать"
                queshions={["Maaan", "Baba", "інше", "dead inside"]}
              />

              <RadioSelect
                type="drink"
                title="Чай, чи Кава?"
                queshions={["чай", "кава", "інше", "живчик"]}
              />

              <RadioSelect
                type="lang"
                title="C++/C# Чи JS/TS ???"
                queshions={["C++", "C#", "JS", "TS"]}
              />
            </div>

            <button className="button is-primary is-small">Надіслати</button>
            <button onClick={() => navigate('result')}>navigate</button>
          </form>
        )}
      </div>

      {captcha && (
        <>
          <div className="mask" />
          <Captcha offCaptcha={setCaptcha} />
        </>
      )}
    </section>
  );
};
