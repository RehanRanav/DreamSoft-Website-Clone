import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={
          <Homepage/>
        }>
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
