import { FormState } from "../Greeting";

const nameCharts = ["suchka", "pidor", "loshara", "eblan", "shluha"];
const numberCharts = ["228", "666", "777", '1000-7'];

const goodEmails = [
  "konchenui.eblan@gmail.com",
  "ebana.loshara@gmail.com",
  "super.dayn@gmail.com",
  "alpha.pidor@gmail.com",
  "chlen.2cm@gmail.com"
];
const goodGames = ["Roblox", "Genshin Impact", "Hello Kitty Forewer", "My litle Pony Story"];

export function handleSubmit(
  form: FormState,
  onError: (newError: { name: string; message: string }) => void,
  onSucces: (v: boolean) => void,
) {
  console.log("sumbitted");
  // checking empty lines
  for (const key in form) {
    const typedKey = key as keyof FormState;

    if (
      typeof form[typedKey] === "string" &&
      form[typedKey].trim().length === 0
    ) {
      onError({
        name: "пусте поле",
        message: "будь ласка не будьте далбайобом і заповніть поле  " + key,
      });
      return;
    }
  }

  // #region CHECK NAME
  const name = form.name;

  if (!name.includes("_")) {
    onError({
      name: "Не коректне ім'я",
      message: "ваше ім'я має бути поділено на => _",
    });
    return;
  } else {
    const splitName = name.split("_");

    if (!splitName.some((el) => nameCharts.includes(el.toLowerCase().trim()))) {
      onError({
        name: "ім'я повна хуйня",
        message:
          "ваше ім'я повинно включати декілька з таких слів: " +
          [...nameCharts].toString(),
      });
      return;
    } else if (!splitName.some((el) => numberCharts.includes(el))) {
      onError({
        name: "число в імені- це круто",
        message:
          "у вашому імені мають бути присутні одні з цифр: " + [numberCharts].join(", "),
      });
      return;
    }
  }

  // #endregion CHECK NAME

  //#region CHECK EMAIL

  if (!goodEmails.includes(form.email)) {
    onError({
      name: "електронка = хуйня",
      message: "ваша електронка має бути одною з зарезервованих: " + [...goodEmails].join(", "),
    });
    return;
  }

  //#endregion CHECK EMAIL

  //#region CHECK GAME

  if (form.game === 'Genshin Impact') {
    onError({ name: "анімешнікі ідуть нахуй", message: "наші послуги недоступні для далбайобів" });
    return;
  } 

  if (
    !goodGames.some((el) => el.toLowerCase() === form.game.trim().toLowerCase())
  ) {
    onError({
      name: "ваша ігра це крінж",
      message: "будь ласка, виберіть ігру для гігачадів: " + goodGames.join(", "),
    });
    return;
  }

  //#endregion CHECK GAME

  //#region CHECK NATION

  switch (form.nation) {
    case "Поляк":
      onError({
        name: "неправильна національність",
        message: "ваш IP адрес має протокол: /3000.ua. Будьласка не піздіть",
      });
      return;

    case "Русский":
      onError({
        name: "Кацапи",
        message: "наш сайт забанив РосКомНадзор на території Кацапії, тому наші послуги не доступні",
      });
      return;
  }

  //#endregion CHECK NATION

  //#region CHECK SIZE

  switch (form.size) {
    case "10+cm":
      onError({ name: "брехня", message: "бляяяяять... не піздіть!" });
      return;
    case "20+cm":
      onError({ name: "піздьож", message: "не піздіть" });
      return;
  }

  //#endregion CHECK SIZE

  //#region CHECK SEX

  switch (form.sex) {
    case "Baba":
      onError({ name: "ти не транс 😢😭", message: "у вашому обліковому записі Google сказано: {userSex: 'male'}" });
      return;
    case "інше":
      onError({ name: "виєбони", message: "просимо не вийобуватись, та обрати нормальну стать" });
      return;
  }

  //#endregion CHECK SEX

  //#region CHECK DRINK

  switch (form.drink) {
    case "кава":
      onError({ name: "Кофемани = дібіли", message: "... а для дебілів цей сайт не призначений" });
      return;

    case "інше":
      onError({ name: "не вийобуйтесь", message: "будь ласка оберіть нормальний напій" });
      return;
  }

  //#endregion CHECK DRINK

  //#region CHECK LANG

  if (form.lang === "C++" || form.lang === "C#") {
    onError({ name: "ідіть нахуй", message: "...здесь властвують другие технологии... ❤️JavaScript love forewer❤️" });
    return;
  }

  //#enfregion CHECK LANG

  onSucces(true); //activate next stage - captcha;
  return;
}
