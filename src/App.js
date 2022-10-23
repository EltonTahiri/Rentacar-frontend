import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import Home from "./routes/Home";
import UsersList from "./features/users/UsersList";
import CarsList from "./features/cars/CarsList";
import DashLayout from "./components/DashLayout";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditCar from "./features/cars/EditCar";
import NewCar from "./features/cars/NewCar";
import Prefetch from "./features/auth/Prefetch";
import AboutUs from "./routes/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route element={<Prefetch />}>
          <Route path="dash" element={<DashLayout />}>
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>

            <Route path="cars">
              <Route index element={<CarsList />} />
              <Route path=":id" element={<EditCar />} />
              <Route path="new" element={<NewCar />} />
            </Route>
          </Route>
          {/* End Dash */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
