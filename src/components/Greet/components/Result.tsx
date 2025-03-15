import { useCallback, useEffect, useState } from "react";
import { FormState } from "../Greeting";

type Props = {
  formInfo: FormState;
};

export const Result: React.FC<Props> = ({ formInfo }) => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const buildGreeting = useCallback(() => {
    let result = "";

    result += "Вітаємо! Дорогий " + formInfo.name + ", ";
    result += "Ви успішно зареєструвались на наш сайт, адже тільки у вас ";
    result += "є прекрасна електронна адресса " + formInfo.email;
    result += " Тільки такі могутні люди як ви, грають в " + formInfo.game;
    result += ` І звичайно тільки ${formInfo.nation} - ${formInfo.sex}, з стволом ${formInfo.size} може дозволити собі пити ${formInfo.drink}`;
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
    <div className="result">{resultMessage && <p>{resultMessage}</p>}</div>
  );
};
