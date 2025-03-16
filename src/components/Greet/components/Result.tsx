import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hanldePassword } from "../functions/handlePassword";
import { ErrorState, setError } from "../../../features/errorSlice";
import { useNavigate } from "react-router-dom";

export const Result: React.FC = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [hasSucces, setHasSucces] = useState<boolean>(false);
  const formInfo = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(state => state.error);

  const handleSubmit = () => {
    if (!visiblePassword) {
      setVisiblePassword(true);
    } else {
      console.log('handle submit');
      hanldePassword(password, handleError, setHasSucces, hasSucces, navigate);
    }
  } 

  const handleError = (err: ErrorState) => {
    dispatch(setError(err));
  }

  const buildGreeting = useCallback(() => {
    let result = "";

    result += "Вітаємо! Дорогий " + formInfo.name + ", ";
    result += "Ви успішно зареєструвались на наш сайт, адже тільки у вас ";
    result += "є прекрасна електронна адресса " + formInfo.email;
    result += " Тільки такі могутні люди як ви, грають в " + formInfo.game;
    result += ` І звичайно тільки ${formInfo.nation} - ${formInfo.sex}, з стволом ${formInfo.size} може дозволити собі пити ${formInfo.drink}!`;
    result +=
      " За всіма стандартами нашого сайту та світового суспільства, ви - найкращий екзампляр людства!";
    result += ` Чому? Звичайно, тому що ви знаєте, що ${formInfo.lang} - найкраща мова програмування`;
    result += " Ну і звичайно, очевидно, що ви не натурал😘";
    result +=
      " Такі люди потрібні нам як найбільше! Завжди раді бачити вас у нас!😉";

    return result;
  }, [formInfo]);

  useEffect(() => {
    if (!resultMessage) {
      setResultMessage(buildGreeting());
    }
  }, [resultMessage, buildGreeting]);

  return (
    <div className="result">
      {resultMessage && <p>{resultMessage}</p>}
      <form className="password" onSubmit={e => {
        e.preventDefault();
        handleSubmit()
      }}>
        {visiblePassword && (
          <>
            <h3 className="password__title"> Введіть пароль для входу</h3>
            <input
              placeholder="пиши пароль"
              className="password__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        <button
          className="password__button button is-primary is-small"
          type="submit"
        >
          Увійти
        </button>
      </form>
    </div>
  );
};
