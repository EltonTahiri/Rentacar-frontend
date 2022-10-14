import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import Home from "./routes/Home";
import UsersList from './features/users/UsersList'
import CarsList from './features/cars/CarsList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="users" element={<UsersList />} />
        <Route path="cars" element={<CarsList />} />
      </Routes>
    </>
  );
}

export default App;
