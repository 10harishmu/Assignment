import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/registerpage" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
