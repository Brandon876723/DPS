import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './component/ProductList'

/*aqui llamamos a ProductList para poder mostrar la tienda completa*/
function App() {
  return (
    <div>
      <h1>Simulación de Tienda</h1>
      <ProductList />
    </div>
  );
}

export default App;
