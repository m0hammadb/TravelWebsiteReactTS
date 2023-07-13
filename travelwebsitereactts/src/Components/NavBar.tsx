import { faMagnifyingGlass, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return <div className="navbar">
        <div className="flex justify-between">
            <div className="logo-container flex items-center justify-center text-[24px] gap-3">
                <FontAwesomeIcon icon={faPlane} color="white" />
                <h3>Travel.</h3>
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