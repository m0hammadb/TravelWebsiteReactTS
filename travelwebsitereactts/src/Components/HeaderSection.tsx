import "./styles/Header.css";
import RoundLinkButton from "./RoundLinkButton";

const HeaderSection = () => {
    return <div className="flex items-start relative header-section pb-[100px] w-full">

        <div className="flex flex-col ms-[200px]">
            <h1 className="text-[100px] leading-[70px] font-[900] glowing-header mt-2"> Discover.</h1>

            <p className="mt-8 text-[21px] tracking-widest">The world with <span className="text-main-yellow">Travel.</span> Join us and get the oportunity to win below a free trip with all covered!</p>
            <div className="flex gap-10 lg:mt-[100px] mt-[60px]">
                <RoundLinkButton name="Read More" url="more" />
                <RoundLinkButton name="Join Now" glowing={true} url="join" />
            </div>
        </div>

    </div>
}



export default HeaderSection;