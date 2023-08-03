import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar">{ <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>}</div>
      <div id="main-section">
        <Routes>
          { <div id="main-section">
   <Routes>
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
     <Route path="/home" element={<h1>home</h1>} />
   </Routes>

   </div> 
          }
          </Routes>
          </div>
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  );
};

export default App
