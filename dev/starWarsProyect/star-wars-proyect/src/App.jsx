import "./App.css";
import StarField from "./components/starfield";

function App() {
  return (
    <>
      <div>
        <h1 className="title">La Enciclopedia de Star Wars </h1>
      </div>
      <div className="menu">
        <li>
          <button className="boton">Personajes</button>
          <button className="boton">Naves</button>
          <button className="boton">Peliculas</button>
          <button className="boton">Planetas</button>
          <button className="boton">Especies</button>
          <button className="boton">Vehiculos</button>
          <button className="boton">Misiones</button>
        </li>
      </div>
      <>
        <div>
          <StarField />
          <h1 style={{ color: "white", position: "relative", zIndex: 1 }}></h1>
        </div>
      </>
    </>
  );
}

export default App;
