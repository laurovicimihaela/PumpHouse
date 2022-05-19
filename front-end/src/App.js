import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prices from "./pages/Prices";
import Gyms from "./pages/Gyms";

function App() {
    return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Prices" element={<Prices />} />
          <Route path="/Gyms" element={<Gyms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    );
}

export default App;
