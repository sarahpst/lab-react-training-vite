import React from "react";

function Greetings({ lang, children }) {
  let text =
    lang === "de"
      ? "Hallo"
      : lang === "en"
      ? "Hello"
      : lang === "es"
      ? "Hola"
      : lang === "fr"
      ? "Bonjour"
      : "";
  return (
    <div>
      <p>
        {text} {children}
      </p>
    </div>
  );
}

export default Greetings;
