import { ErrorState } from "../../../features/errorSlice";

const goodWords = ["sasiska", "pipiska", "siska", "piska"];

export function hanldePassword(
  password: string,
  onError: (v: ErrorState) => void,
  setSucces: (v: boolean) => void,
  isSucces: boolean,
  navigate: (path: string) => void,
) {
  if(!isSucces) {
    const arrayPasword = password.trim().split("");

  const hasSpecialChars = (str: string): boolean =>
    /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\/?]/.test(str);

  const hasLettersAndNumbers = (str: string) =>
    /[a-zA-Z]/.test(str) && /\d/.test(str);

  if (arrayPasword.length < 10) {
    onError({
      name: "хуйня пароль",
      message: "ваш пароль має містити що найменьше 10 символів",
    });
    return;
  }

  if (!hasLettersAndNumbers(password)) {
    onError({
      name: "єбані цифри блять",
      message: "ваш пароль має мати цифри і букви",
    });
    return;
  }

  if (!hasSpecialChars(password)) {
    onError({
      name: "пароль без вопроса - как жызнь без поноса",
      message: "ваш пароль має мати спеціальні символи",
    });
    return;
  }

  if (!password.includes("777")) {
    onError({
      name: "михалевска одобряє",
      message:
        "ваш пароль має мати число, яке є результатом: " +
        "\u03C0 \u00D7 \u221A10000 + 463",
    });
    return;
  }

  if (!password.includes("cat")) {
    onError({
      name: "шо за палочкі блять?",
      message: "ваш пароль має мати англ переклад китайського традиційного: 貓",
    });
    return;
  }

  if (!goodWords.some((el) => password.includes(el))) {
    onError({
      name: "якась хуйня",
      message:
        "ваш пароль має містити одне з слів: " + goodWords.join(", "),
    });
    return;
  }

  setSucces(true);
  return;
  } else {
    if (password === '1234') {
      console.log('succes');
      navigate('/greeting/content');
      return;
    } else {
      onError({name: 'заєбав блять', message: 'ой блять, кароче напиши просто 1234'});
      return;
    }
  }
}
