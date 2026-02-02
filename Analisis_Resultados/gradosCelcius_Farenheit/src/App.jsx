import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*formulas:
de celcius a farenheit: f= (c * 9/5) + 32 
de farenheit a celcius: f= (c - 32) * 5/9 
*/

function App() {

  //varibale de estado para el estado de la temperatura ingresada
  const [temperatura, setTemperatura] = useState("");

  //variable de estado para el tipo de conversion
  const [conversion, setConversion] = useState("CtoF");

  //varibale de estado para el resultado
  const [resultado, setResultado] = useState(null);

  //funcion para hacer la conversion
  const covertir = () =>{
    //para que pase el texto a numeros
    let valor = parseFloat(temperatura);
    if(isNaN(valor)){
      setResultado("por favor ingresa un numero valido");
      return;
    };

    if (conversion === "CtoF") {
      let farenheit = (valor * 9) / 5 + 32;
      setResultado(`${valor} °C = ${farenheit.toFixed(2)} °F`);
    }
    else{
      let celcius = ((valor - 32) * 5) / 9;
      setResultado(`${valor} °F = ${celcius.toFixed(2)} °C`);
    }
  };

  return (

    /*aqui hare un input para que ingresen la temp 
    luego en el select 
    sera para elegir que tipo de conversion se hara 
    y en el button 
    sera para que se ejecute la conversion 
    y esto
     {resultado && <p>{resultado}</p>}
     sera para mostrar el resultado*/
    <div>
      <h1>Conversor de Temperaturas</h1>
      <input type="text" value={temperatura} 
      onChange={(e) => setTemperatura(e.target.value)} 
      placeholder='Ingrese la temperatura'/>

      <br /><br />

      <select value={conversion}
      onChange={(e) => setConversion(e.target.value)}>
        <option value="CtoF">Celcius = Farenheit</option>
        <option value="FtoC">Farenheit = Celcius</option>
      </select>

      <br /><br />

      <button onClick={covertir}>Convertir</button>

      <br /><br />

      {resultado && <p>{resultado}</p>}

    </div>

  );

}

export default App
