import { faMagnifyingGlass, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return <div className="navbar">
        <div className="flex justify-between">
            <div className="logo-container flex items-center justify-center text-[24px] gap-3 text-main-yellow group  cursor-pointer">
                <FontAwesomeIcon className="group-hover:text-white duration-500" icon={faPlane} />
                <h3 className="group-hover:text-main-yellow text-white duration-500">Travel.</h3>
            </div>

            <div className="menu-items font-[500]">
                <ul className="flex gap-[100px]">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon fontSize={20} icon={faMagnifyingGlass} /></li>
                </ul>
            </div>
        </div>
    </div>
}

export default NavBar;