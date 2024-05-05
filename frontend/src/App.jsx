import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>Anime</h1>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            Home
          </Link>
          <Link to="/" className="navbar_link">
            Beeni
          </Link>
          <Link to="/create" className="navbar_link">
            Share
          </Link>
          <Link to="/create" className="navbar_link">
            Share with beeeni
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
