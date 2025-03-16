import React from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../../features/formData";

interface Props {
  title: string;
  type: string;
  options: string[];
  titleName?: string;
}

export const Select: React.FC<Props> = ({ title, options, type, titleName }) => {
  const dispatch = useDispatch();

  return (
    <div className="field">
      <label className="label">{title}
        {titleName && (
          <span className="textSpan">{titleName}</span>
        )}
      </label>
      <div className="control">
        <div className="select">
          <select onChange={(e) => dispatch(updateField({key: type, value: e.target.value}))}>
            <option value={""} selected disabled hidden>оберіть...</option>
            {options.map((opt) => {
              return <option key={opt} value={opt}>{opt}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
