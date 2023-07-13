import { faLocation, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundLinkButton from "./RoundLinkButton";
import "./styles/Trip.css";

const Trip = () => {
    return <div className="flex flex-col p-[50px] py-[80px] gap-10">
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPlane} />
                <span>First Class</span>
            </div>

            <div className="">
                <span className="glow-text">0$</span>
            </div>
        </div>

        <div>
            <p><span className="text-main-yellow">Manchester, UK</span> to <span className="text-main-yellow">Madrid, Spain</span> </p>
        </div>

        <div className="flex items-center">
            <div>

                <FontAwesomeIcon fontSize={10} icon={faLocationDot} />
            </div>
            <div className="mb-1 ms-3"><p className="text-[20px] tracking-[15px]">..........</p></div>
            <div className="ms-3 mt-1"><p className="text-[14px]">12h 32m</p></div>
        </div>

        <div className="flex gap-5 justify-between">
            <RoundLinkButton name="Read More"  url="a"/>
            <RoundLinkButton name="Buy" glowing={true}  url="a"/>
        </div>
    </div>
};

export default Trip;