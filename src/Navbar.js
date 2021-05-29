import Logo from "url:./images/Logo.png?as=png&width=150"; /* eslint-disable-line */
import { useState } from "react";
import LanguageButton from "./LanguageButton";

const Navbar = () => {
  const [language, setLanguage] = useState("idn");

  function toggleId() {
    if (language == "en") {
      setLanguage("idn");
    }
  }
  function toggleEn() {
    if (language == "idn") {
      setLanguage("en");
    }
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="main-menu">
        <ul>
          <li>Halaman Utama</li>
          <li>Tentang</li>
          <li>Hubungi Kami</li>
        </ul>
        <div className="language-switch">
          <LanguageButton
            toggleActive={toggleId}
            language={language}
            className="idn"
          >
            ID
          </LanguageButton>
          <LanguageButton
            toggleActive={toggleEn}
            language={language}
            className="en"
          >
            EN
          </LanguageButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
