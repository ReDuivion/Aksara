import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPages from "./pages/LoginPages.jsx"

import ArtikelHome from "./pages/Artikels/Artikel.jsx"
import ArtikelA from "./pages/Artikels/ArtikelVokal/ArtikelA.jsx"

import Materi from "./pages/Materi"
import DetailMateri from "./pages/DetailMateri.jsx";
import Aksara from "./pages/Aksara"
import Quiz from "./pages/Quiz"

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<LoginPages />}></Route>

            <Route exact path="/artikel" element={<ArtikelHome />}></Route>
            <Route exact path="/artikel/a" element={<ArtikelA />}></Route>

            <Route exact path="/materi" element={<Materi/>}></Route>
            <Route exact path="/materi/detail/:materiId" element={<DetailMateri/>}></Route>
            <Route exact path="/artikel" element={<Aksara/>}></Route>
            <Route exact path="/quiz" element={<Quiz/>}></Route>

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
