import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
