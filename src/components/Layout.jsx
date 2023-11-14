import { Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function Layout() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>

            <Outlet />
        </div>
    );
}

export default Layout;