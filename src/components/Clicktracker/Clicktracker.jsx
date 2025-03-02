import { useState, useEffect } from "react";

export default function Clicktracker() {
  const [click, setClick] = useState(0);
  const [date, setDate] = useState(Date.now);

  useEffect(() => {}, []);
  useEffect(() => {}, []);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      <button onClick={() => setClick(click + 1)}>Click: {click}</button>
      <button onClick={() => setClick(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
