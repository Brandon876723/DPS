import React from "react";

/*Este componente recibira los datos correspondientes
a los que puse en la funcion
en pocas palabras lo que hace es que recibe la informacion
de un producto como propiedades y lo muestra en la pantalla
y como no esta siendo utilizado para un producto en 
especifico se adaptaria a cualquier producto que pusieramos*/ 

function ProductItem({ productoId, productoNombre, precio, urlImage }) {
    return (
        <div>
            <img src={urlImage} alt={productoNombre} />
            <h3>{productoNombre}</h3>
            <p>ID: {productoId}</p>
            <p>Precio: ${precio}</p>
        </div>
    );
}

export default ProductItem;