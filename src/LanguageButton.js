import { useEffect, useState } from "react";

const Button = ({ toggleActive, language, className, children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (language === className) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [language]);

  return (
    <button
      onClick={toggleActive}
      style={
        active
          ? { background: "red", border: "2px solid red" }
          : { background: "none", border: "2px solid white" }
      }
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
