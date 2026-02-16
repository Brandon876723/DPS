import { useState, useEffect } from "react";
import ContactList from "./componentes/contactList";
import contactsData from "./contactos.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");


  useEffect(() => {
    setContacts(contactsData);
  }, []);

  
  const addContact = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newContact = {
      id: Date.now(),
      nombre,
      apellido,
      telefono,
      favorito: false
    };

    setContacts([...contacts, newContact]);

    setNombre("");
    setApellido("");
    setTelefono("");
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map(contact =>
        contact.id === id
          ? { ...contact, favorito: !contact.favorito }
          : contact
      )
    );
  };

  const sortedContacts = [...contacts].sort(
    (a, b) => b.favorito - a.favorito
  );

  return (
    <div className="app-container">
      <h1>📱 Lista de Contactos</h1>

      <form className="form-container" onSubmit={addContact}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button type="submit">Agregar Contacto</button>
      </form>

      <ContactList
        contacts={sortedContacts}
        onDelete={deleteContact}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
