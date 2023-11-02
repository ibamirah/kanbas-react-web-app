import { Link, useLocation } from "react-router-dom";
import './index.css';
import myImage from './Northeastern-Logo.png'; 
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineMonitor } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linksToIconsMap = {
        Account: <MdOutlineAccountCircle className="fs-1 text" />,
        Dashboard: <RiDashboard3Line className="fs-1 text" />,
        Courses: <FaBook className="fs-1 text" />,
        Calendar: <BsCalendar2Week className="fs-1 text" />,
        Inbox: <FaInbox className="fs-1 text" />,
        History: <AiOutlineClockCircle className="fs-1 text" />,
        Studio: <MdOutlineMonitor className="fs-1 text" />,
        Commons: <BiExit className="fs-1 text" />,
        Help: <BiHelpCircle className="fs-1 text" />,
    };
    const { pathname } = useLocation();
    // const websiteUrl = 'https://www.Northeastern.edu';
    return (
        <div className="wd-kanbas-navigation list-group" style={{ width: 80 }}>
            {/* <a href={websiteUrl} target="_blank"> */}
            <img src={myImage} alt="Northeastern Logo" />
            {/* </a> */}
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item text-center p-4 
          ${pathname.includes(link) && "active"
                        && "active"}`}
                        >
                     {linksToIconsMap[link]}  
                     <br/>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;