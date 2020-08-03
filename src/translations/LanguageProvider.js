import React from "react";
import { IntlProvider } from "react-intl";

import messages_de from "./de.json";
import messages_en from "./en.json";
import messages_es from "./es.json";

const messages = {
  de: messages_de,
  en: messages_en,
  es: messages_es,
};

const language = navigator.language.split(/[-_]/)[0]; // language without region code

const LanguageProvider = (props) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {props.children}
  </IntlProvider>
);

export default LanguageProvider;
