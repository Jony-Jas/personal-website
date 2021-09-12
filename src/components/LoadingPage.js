import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Redirect } from "react-router-dom";

function LoadingPage() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 2500);
  }, []);
  const showScreen = () => {
    if (display) {
      return <Loader />;
    } else {
      return <Redirect to="/profile" />;
    }
  };
  return <React.Fragment>{showScreen()}</React.Fragment>;
}

export default LoadingPage;
