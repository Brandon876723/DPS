import React, { useState, useEffect } from "react";
import Contact from "./contact";
import contactsData from "../contacto.json";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const addContact = (nombre, apellido, telefono) => {
    const newContact = {
      id: Date.now(),
      nombre,
      apellido,
      telefono,
      favorito: false
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map(c =>
        c.id === id ? { ...c, favorito: !c.favorito } : c
      )
    );
  };

  const sortedContacts = [...contacts].sort((a, b) => b.favorito - a.favorito);

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        addContact(e.target.nombre.value, e.target.apellido.value, e.target.telefono.value);
        e.target.reset();
      }}>
        <input name="nombre" placeholder="Nombre" required />
        <input name="apellido" placeholder="Apellido" required />
        <input name="telefono" placeholder="Teléfono" required />
        <button type="submit">Agregar</button>
      </form>

      {sortedContacts.map(contact => (
        <Contact 
          key={contact.id} 
          contact={contact} 
          onDelete={deleteContact} 
          onToggleFavorite={toggleFavorite} 
        />
      ))}
    </div>
  );
}
