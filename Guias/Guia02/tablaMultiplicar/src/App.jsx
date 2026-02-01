import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numero, setNumero] = useState(1);
  const [limite, setLimite] = useState(10);
  const [resultado, setResultado] = useState([]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= limite; i ++) {
      nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    setResultado(nuevaTabla);
  }

  return(
    <main>
      <div className="card">
        <div className="tabla">
          <h1>Tablas de Multiplicar</h1>
          <label className="text">Ingrese un número:
            <input type="number" className="input" value={numero}
            onChange={(e) => setNumero(parseInt(e.target.value))} />
          </label>
          <br />
          <label className="text">Limite de números a mostrar:
            <input type="number" className='input'  value={limite} 
            onChange={(e) => setLimite(parseInt(e.target.value))} />
            </label>
            <br />
            <button className="button" onClick={generarTabla}>Generar Tabla</button>
            <br />
            <h3>Resultados</h3>
            <ul className="ul">
              {resultado.map((item, index) => (
                <li className="li" key={index}>{item}</li>
              ))}
            </ul>
        </div>
      </div>
    </main>
  )
}

export default App
