import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Tutorial from "./components/Tutorial/Tutorial";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import MyService from "./components/MyService/MyService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/MyService" element={<MyService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
