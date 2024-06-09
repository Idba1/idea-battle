import { FaHome, FaUsers } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-sky-900 text-white">
                <ul className="menu p-4 text-xl">
                    <li>
                        <NavLink to="/">
                        <FaHome/>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin-dashboard/manage-contest">
                        <MdEvent />
                            Manage Contest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin-dashboard/manage-user">
                        <FaUsers></FaUsers>
                            Manage USer</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;