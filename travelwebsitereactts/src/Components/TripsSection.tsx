import Trip from "./Trip";

const TripsSection = () => {
    return <div className="owl-carousel owl-theme">
        <Trip travelId={1} travelClass="Economy Class" duration="1h 10m" from="Bushehr, Iran" to="Shiraz, Iran" price={100} />
        <Trip travelId={2} travelClass="Business Class" duration="2h 10m" from="Bushehr, Iran" to="Tehran, Iran" price={249} />
        <Trip travelId={3} travelClass="First Class" duration="0h 50m" from="Khark Island, Iran" to="Shiraz, Iran" price={79} />
        <Trip travelId={4} travelClass="First Class" duration="1h 10m" from="Bushehr, Iran" to="Shiraz, Iran" price={100} />
        <Trip travelId={5} travelClass="Business Class" duration="1h 10m" from="Bushehr, Iran" to="Shiraz, Iran" price={100} />
        <Trip travelId={6} travelClass="Business Class" duration="1h 10m" from="Bushehr, Iran" to="Shiraz, Iran" price={100} />
        <Trip travelId={7} travelClass="Business Class" duration="1h 10m" from="Bushehr, Iran" to="Shiraz, Iran" price={100} />
       
    </div>
};

export default TripsSection;