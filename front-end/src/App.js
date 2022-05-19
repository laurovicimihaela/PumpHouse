import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prices from "./pages/Prices";
import Gyms from "./pages/Gyms";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/Gyms" element={<Gyms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
