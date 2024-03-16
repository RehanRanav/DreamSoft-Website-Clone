import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import About from "./components/About";
import ContactUS from './components/ContactUS.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
