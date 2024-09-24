import { useState } from "react";
import { nanoid } from "nanoid";

import SearchBox from "./components/SearchBox/SearchBox";
import СontactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // filter contact
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // delete contact
  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // add contact
  const handleAdd = (newContact) => {
    setContacts((prev) => [...prev, { ...newContact, id: nanoid() }]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox value={filter} handleChange={handleFilterChange} />
      <СontactList data={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
