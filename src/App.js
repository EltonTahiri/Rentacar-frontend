import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterForm from "./pages/Register";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
