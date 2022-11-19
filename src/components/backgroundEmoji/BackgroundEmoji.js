import React, { useEffect, useState } from "react";
import "./backgroundEmoji.css";

export const BackgroundEmoji = () => {
  const emojis = ["🍕", "🧀", "🍗", "🍖", "🧅", "🍍", "🔥"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const posX = Math.floor((Math.random() * 90));
  const posY = Math.floor((Math.random() * 90));
  const size = Math.floor((Math.random() * 6));
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="emoji" style={{ top: `${posY}%`, left: `${posX}%`, fontSize: `${size}rem` }}>
      {randomEmoji}
    </div>
  );
};
