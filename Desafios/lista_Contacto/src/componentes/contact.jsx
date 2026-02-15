import React from "react";

function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact-card ${contact.favorite ? "favorite" : ""}`}>
      <h3>
        {contact.name} {contact.lastname}
      </h3>
      <p>📞 {contact.phone}</p>

      <div className="buttons">
        <button onClick={() => onToggleFavorite(contact.id)}>
          {contact.favorite ? "★ Quitar favorito" : "☆ Agregar a favoritos"}
        </button>

        <button onClick={() => onDelete(contact.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Contact;