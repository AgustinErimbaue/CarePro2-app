import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Tutorial from "./components/Tutorial/Tutorial";
import Contacto from "./components/Contacto/Contacto";
import Registro from "./components/Registro/Registro";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
