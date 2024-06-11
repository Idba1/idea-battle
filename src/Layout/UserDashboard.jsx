import { FaHome } from "react-icons/fa";
import { MdEvent, MdOutlineCloudDone, MdOutlineCreateNewFolder } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
    
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
                        <NavLink to="/user-dashboard/my-participated-contest">
                        <MdEvent />
                        Participated</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-dashboard/my-winning-contest">
                        <MdOutlineCreateNewFolder />
                        Winning Contest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-dashboard/my-profile">
                        <MdOutlineCloudDone />
                            My Profile</NavLink>
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

export default UserDashboard;