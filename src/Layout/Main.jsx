import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="container  mx-auto">
        <Navbar></Navbar>
        <div className=" min-h-[calc(100vh-250px)]" >
            <Outlet ></Outlet>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-12">
            <Footer></Footer>
        </div>
    </div>
    );
};

export default Main;