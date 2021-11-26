import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Compositores from "./Compositores.js";
import EliminarCompositor from "./eliminarCompositor.js";
import Cabecera from "./cabecera.js";

function App() {
  const [text, setText] = useState("");
  const [compositores, setCompositores] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  function manageChange(event) {
    setText(event.target.value);
  }

  function anyadirCompositor() {
    const nuevoArray = [...compositores, { nombre: text }];
    setCompositores(nuevoArray);
    setText("");
  }

  function borrarCompositor(nombre) {
    const nuevoArray = compositores.filter(function (compositor) {
      if (compositor.nombre !== nombre) {
        return true;
      } else {
        return false;
      }
    });
    setCompositores(nuevoArray);
  }

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Compositores compositores={compositores} />
              <input type="text" value={text} onChange={manageChange} />
              <button onClick={anyadirCompositor}> Añadir </button>
            </>
          }
        />
        <Route
          path="/eliminar"
          element={<EliminarCompositor borrarCompositor={borrarCompositor} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
