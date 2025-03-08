import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import users from "../../contacts.json";
import { useState } from "react";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setcontacts] = useState(users);
  // Состояние для хранения поискового запроса
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация контактов по имени
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addContact = (newContact) => {
    setcontacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox query={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={filterContacts} />
    </div>
  );
}
