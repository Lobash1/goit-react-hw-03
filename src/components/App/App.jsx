import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import css from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm onAdd={addUser} />
    </div>
  );
}
