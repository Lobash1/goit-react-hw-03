// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import css from "./App.module.css";
import Clicktracker from "./Clicktracker/Clicktracker";
import Sidebar from "./Sidebar/Sidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Homevork fo React 3</h1>
      <Clicktracker />
      <button onClick={openSidebar}>Open</button>
      {isOpen && <Sidebar onClose={closeSidebar} />}
    </div>
  );
}
