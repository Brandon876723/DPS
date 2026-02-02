import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function LoginForm() { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleLogin = (e) => { 
    e.preventDefault();

    //credenciales que usare como ejemplo
    const validUser = "admin"
    const validPass = "T-T"

    if (username === validUser && password === validPass) {
      setMessage(`Bienvenido, ${username}!`);
      } else {
        setMessage("Credenciales incorrectas. Inténtalo de nuevo.");
      }
  };

  return (

    <div>
      <h2>Login</h2>
       <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input type="text" value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </div>
        
        <button type='submit'>Iniciar sesión</button>
       </form>

       {message && <p>{message}</p>}

    </div>
  );

}

export default LoginForm
