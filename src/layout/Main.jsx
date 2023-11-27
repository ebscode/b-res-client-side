import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";


const Main = () => {
    const location=useLocation()
    console.log(location)
    const nohf=location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div className="max-w-7xl mx-auto">
           { nohf || <Navbar></Navbar>}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;