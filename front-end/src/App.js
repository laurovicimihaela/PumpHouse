import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
