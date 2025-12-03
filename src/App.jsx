import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Entities from "./pages/Entities";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="container py-4">

                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4 px-3 shadow-sm">
                    <Link className="navbar-brand fw-bold" to="/">
                        Pokémon App
                    </Link>

                    <div className="collapse navbar-collapse show">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entities">Entities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="my-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/entities" element={<Entities />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                <footer className="text-center py-4 text-muted">
                    <small>Pokémon App</small>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
