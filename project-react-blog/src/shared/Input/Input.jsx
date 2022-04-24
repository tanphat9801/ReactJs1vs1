import "./login.css";
import cls from "classnames";
import { useState } from "react";
import IconSearch from "./IconSearch";
const Input = ({ label, className, type = "text", error, ...restProps }) => {
  const [localType, setLocalType] = useState(type);

  function handleShowEyes() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }

  const classesIcon = cls("toggle-password", {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });

  const classSearch = cls("input-search__input", className);

  if (type === "search") {
    return (
      <div className="input-search">
        <IconSearch />
        <input className={classSearch} type={localType} {...restProps} />
      </div>
    );
  }

  return (
    <>
      <div
        className={cls("form-control", {
          "form-control_has-error": error,
        })}
      >
        {label && <label>{label}</label>}
        <div className="form-control_wrapper">
          {type === "password" && (
            <i className={classesIcon} onClick={handleShowEyes}></i>
          )}
          <input type={localType} {...restProps} className={className} />
        </div>
        {error && <span className="form-control_error">{error}</span>}
      </div>
    </>
  );
};

export default Input;
