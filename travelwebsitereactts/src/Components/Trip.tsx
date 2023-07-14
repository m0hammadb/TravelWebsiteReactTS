import { faLocation, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundLinkButton from "./RoundLinkButton";
import "./styles/Trip.css";

const Trip = (props: {
    price: number,
    from: string,
    to: string,
    travelClass: string,
    duration: string,
    travelId: number
}) => {
    return <div className="flex flex-col p-[50px] py-[80px] gap-10">
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPlane} />
                <span>{ props.travelClass }</span>
            </div>

            <div className="">
                <span className="glow-text">{ props.price }$</span>
            </div>
        </div>

        <div>
            <p><span className="text-main-yellow">{props.from}</span> to <span className="text-main-yellow">{ props.to }</span> </p>
        </div>

        <div className="flex items-center">
            <div>

                <FontAwesomeIcon fontSize={10} icon={faLocationDot} />
            </div>
            <div className="mb-1 ms-3"><p className="text-[20px] tracking-[15px]">..........</p></div>
            <div className="ms-3 mt-1"><p className="text-[14px]">{ props.duration }</p></div>
        </div>

        <div className="flex gap-5 justify-between">
            <RoundLinkButton name="Read More" url={"TicketDetails?id=" + props.travelId} />
            <RoundLinkButton name="Buy" glowing={true} url={"BuyTicket?id=" + props.travelId } />
        </div>
    </div>
};

export default Trip;