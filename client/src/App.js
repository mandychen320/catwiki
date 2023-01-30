import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Search from "./routes/search"
import InfoPage from "./routes/InfoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/breed/:id" element={<InfoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
