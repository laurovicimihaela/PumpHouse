import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
