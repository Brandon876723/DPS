//este import useState es para traer la funcion de dicho nombre de react
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  //definiendo el estado del contador
  const [contador, setContador] = useState(0);
  //aqui cree una variable de estado que llame contador,
  //este empezara en 0 y setContador es la funcion que usamos
  //para cambiar el valor

  return(
    /*en el parrafo mostre el valor del contador en pantalla
    que seria 0, en las {} va el nombre de la varibale
    que hice para  mostrar dicho valor y cuando demos 
    click a un boton lo valla mostrando alli al ser modificado
    
    al crear el boton busque que onclick significa cuando se
    haga click, lo que quiere decir que al hacer click al boton 
    ejecutara la funcion setContador(contador + 1) lo cual 
    lo que mostramos en el parrafo hara que se incremente en 1
    cuando demos click al boton y lo mismo seria con el otro solo que lo 
    contrario*/
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>

  );

}

export default App
