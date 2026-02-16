import React from "react";

function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact-card ${contact.favorito ? "favorite" : ""}`}>
      <h3>
        {contact.nombre} {contact.apellido}
      </h3>
      <p>📞 {contact.telefono}</p>

      <div className="buttons">
        <button onClick={() => onToggleFavorite(contact.id)}>
          {contact.favorito ? "★ Quitar favorito" : "☆ Agregar a favoritos"}
        </button>

        <button onClick={() => onDelete(contact.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Contact;
