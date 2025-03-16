import React from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../../features/formData";

interface Props {
  title: string;
  titleName?: string;
  value: string;
  type: string;
}

const TextInputComponent: React.FC<Props> = ({
  title,
  value,
  type,
  titleName,
}) => {
  const dispatch = useDispatch();
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
          onChange={(e) => dispatch(updateField({key: type, value: e.target.value}))}
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

