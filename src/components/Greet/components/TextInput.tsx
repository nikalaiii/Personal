import React from "react";

interface Props {
  title: string;
  titleName?: string;
  value: string;
  type: string;
  onChange: (t: string, v: string) => void;
}

const TextInputComponent: React.FC<Props> = ({
  title,
  value,
  onChange,
  type,
  titleName,
}) => {
  return (
    <div className="field">
      <label className="label">
        {title}
        {titleName && <span className="textSpan">{titleName}</span>}
      </label>
      <div className="control">
        <input
          className="input is-small"
          placeholder={`Напиши сюда ${type}`}
          value={value}
          onChange={(e) => onChange(type, e.target.value)}
          required
        />
      </div>
    </div>
  );
};

// Мемоізуємо компонент
export const TextInput = React.memo(TextInputComponent, (prevProps, nextProps) => {
  // Перевіряємо, чи змінився пропс value
  return prevProps.value === nextProps.value;
});

