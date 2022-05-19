import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/Classes";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/classes" element={<Classes />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
