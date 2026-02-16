import { useState, useEffect } from "react";
import ContactList from "./componentes/contactList";
import contactsData from "./contactos.json";
import "./App.css";

function App() { 
  return (
     <div className="App"> 
     <h1>📒 Agenda de Contactos</h1> 
     <ContactList /> </div> ); 
     }

 export default App;
