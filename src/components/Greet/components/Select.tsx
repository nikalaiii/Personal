import React from "react";

interface Props {
  title: string;
  type: string;
  options: string[];
  titleName?: string;
  onChange: (t: string, v: string) => void;
}

export const Select: React.FC<Props> = ({ title, onChange, options, type, titleName }) => {
  return (
    <div className="field">
      <label className="label">{title}
        {titleName && (
          <span className="textSpan">{titleName}</span>
        )}
      </label>
      <div className="control">
        <div className="select">
          <select onChange={(e) => onChange(type, e.target.value)}>
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
