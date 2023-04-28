import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login.jsx";
import Pharmacies from "./pages/Pharmacies.jsx";



function App() {
  return (
    <div className="App">
      <Routes>
      

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
      </Routes>
    </div>
  );
}

export default App;
