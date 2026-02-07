import React, { useState } from "react";
import ProductItem from "./ProductItem";

/*El useState guardara la lista de productos en el estado interno del 
componente,
el productos.map(), lo que hace es recorrer la lista y por cada
producto crea un "ProductoItem",
mientras que el key seria la clave unica para identificar cada 
elemento en la lista; algo parecido a base de datos
"productoId",
ademas si quisiera agregar mas productos a este arreglo, automaticamente 
se mostrarian sin cambiar el codigo.
En conclusion, este componente es el encargado de manejar la lista
de productos y mostrar cada uno usando el componente "ProductItem" 
que ya habia hecho anteriormente
 */

function ProductList() {
    const [productos] = useState([
        { productoId: 1, productoNombre: "Laptop", precio: 800, urlImage: "https://via.placeholder.com/150" },
        { productoId: 2, productoNombre: "Mouse", precio: 20, urlImage: "https://via.placeholder.com/150" },
        { productoId: 3, productoNombre: "Teclado", precio: 35, urlImage: "https://via.placeholder.com/150" },
        { productoId: 4, productoNombre: "Monitor", precio: 200, urlImage: "https://via.placeholder.com/150" },
        { productoId: 5, productoNombre: "Auriculares", precio: 50, urlImage: "https://via.placeholder.com/150" },
        { productoId: 6, productoNombre: "Impresora", precio: 120, urlImage: "https://via.placeholder.com/150" },
        { productoId: 7, productoNombre: "Tablet", precio: 300, urlImage: "https://via.placeholder.com/150" },
        { productoId: 8, productoNombre: "Celular", precio: 600, urlImage: "https://via.placeholder.com/150" },
        { productoId: 9, productoNombre: "Cámara", precio: 450, urlImage: "https://via.placeholder.com/150" },
        { productoId: 10, productoNombre: "Consola", precio: 500, urlImage: "https://via.placeholder.com/150" },
    ]);

    return(
        <div>
            <h2>Lista de Productos</h2>
            {productos.map((prod) => (
                <ProductItem
                 key={prod.productoId}
                 productoId={prod.productoId}
                 productoNombre={prod.productoNombre}
                 precio={prod.precio}
                 urlImage={prod.urlImage}
                />
            ))}
        </div>
    );
}

export default ProductList;