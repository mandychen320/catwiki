import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Search from "./components/search"
import InfoPage from "./routes/InfoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api" element={<Search />}/>
          <Route path="/api/breed/:id" element={<InfoPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
