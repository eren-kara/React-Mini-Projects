import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
export default function Convert({ text, language }) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            key: KEY,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (text) {
      translate();
    }
  }, [language, text]);
  return <div>{translated}</div>;
}
