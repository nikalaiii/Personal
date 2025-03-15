import React from "react";

interface Props {
  onChange: (t: string, v: string) => void;
  title: string;
  type: string;
  queshions: string[];
}

export const RadioSelect: React.FC<Props> = ({
  title,
  queshions,
  onChange,
  type,
}) => {
  return (
    <div className="field">
      <label className="label">{title}</label>
      <div
        className="control"
        style={{
          display: "flex",
          maxHeight: '100px',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: "20px",
        }}
      >
        {queshions.map((queshion) => {
          return (
            <label
              style={{
                color: "black",
              }}
              key={queshion}
              className="radio"
            >
              <input
                onChange={(e) => onChange(type, e.target.value)}
                type="radio"
                name={type}
                value={queshion}
              />
              {queshion}
            </label>
          );
        })}
      </div>
    </div>
  );
};
