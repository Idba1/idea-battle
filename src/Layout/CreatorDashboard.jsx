import { FaHome } from "react-icons/fa";
import { MdEvent, MdOutlineCloudDone, MdOutlineCreateNewFolder } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const CreatorDashboard = () => {
    
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
                        <NavLink to="/creator-dashboard/add-contest">
                        <MdEvent />
                            Add Contest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/creator-dashboard/my-created-contest">
                        <MdOutlineCreateNewFolder />
                            Create Contest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/creator-dashboard/contest-submitted">
                        <MdOutlineCloudDone />
                            Submit Contest</NavLink>
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

export default CreatorDashboard;