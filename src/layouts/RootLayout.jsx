import { Outlet, Link } from "react-router-dom";

function RootLayout() {
    return (
        <div className="p-4">
            <nav className="flex gap-4 mb-4">
                <Link to="/">Home</Link>
                <Link to="/entities">Entities</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
            <footer className="mt-10 text-center">Footer</footer>
        </div>
    );
}

export default RootLayout;
