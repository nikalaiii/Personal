import React from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../../features/formData";

interface Props {
  title: string;
  type: string;
  queshions: string[];
}

export const RadioSelect: React.FC<Props> = ({
  title,
  queshions,

  type,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="field">
      <label className="label">{title}</label>
      <div
        className="control"
        style={{
          display: "flex",
          maxHeight: "100px",
          flexWrap: "wrap",
          flexDirection: "column",
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
                onChange={(e) => dispatch(updateField({key: type, value: e.target.value}))}
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
