import classNames from "classnames";
import React, { useState } from "react";

const images: string[] = [
  "img/dibils/nikalaiii1.jpg",
  "img/dibils/nikalaiii2.jpg",
  "img/dibils/nikalaiii3.jpg",
  "img/dibils/vitalik.jpg",
  "img/dibils/andri1.jpg",
  "img/dibils/andri2.jpg",
];

type Props = {
    onError: (newError: { name: string; message: string }) => void,
    onSucces: (v: boolean) => void;
}

export const Captcha: React.FC<Props> = ({ onError, onSucces: onSucces }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const hanldeClick = (img: string) => {
    if (selectedImages.find(el => el === img)) {
        setSelectedImages(prev => prev.filter(el => el !== img));
        return;
    } else {
        setSelectedImages(prev => [...prev, img]);
        return;
    }
  }

  const handleSubmit = () => {
    if (images.every(img => selectedImages.includes(img))) {
        onSucces(true);
        return;
    } else {
        onError({ name: 'Помилка', message: 'Перчитайте умову завдання та спробуйте ще. Чи ви натурал?🤨'})
        return;
    }
  }
  return (
    <div className="captcha">
        <img src="img/captchaLogo2.jpg" alt="captcha" style={{
            maxWidth: '45%',
            maxHeight: '30px',
        }}/>

      <h1 className="captcha__title">Підтвердіть що ви не натурал</h1>
      <h2 className="captcha__subtitle">
        Будь ласка оберіть фотографії на яких зображені дібіли
      </h2>

      <div className="captcha__images">
        {images.map((image) => {
          return (
            <div key={image}
              className={classNames("captcha__imgwrapper", {
                "captcha__imgwrapper--selected": selectedImages.find(
                  (el) => el === image
                ),
              })}
              onClick={() => hanldeClick(image)}
            >
              <img src={image} alt="captcha image" className="captcha__image" />
            </div>
          );
        })}
      </div>
      <button className="button is-primary is-small" onClick={() => handleSubmit()}>Надіслати</button>
    </div>
  );
};
