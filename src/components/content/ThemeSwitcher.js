import React, { useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  var html = document.getElementsByTagName("html")[0];
  var att = document.createAttribute("data-theme");

  const switcherFunction = (val) => {
    setTimeout(function () {
      att.value = val;
      html.setAttributeNode(att);
    }, 200);
  };

  if (isDarkMode) {
    switcherFunction("dark");
  } else {
    switcherFunction("");
  }

  const sizeAdj = () => {
    if (window.screen.width <= 600) {
      return 60;
    }
    return 80;
  };

  return (
    <div className="theme">
      <DarkModeToggle
        className="theme-toggle"
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={sizeAdj()}
        speed={2}
      />
    </div>
  );
}

export default ThemeSwitcher;
