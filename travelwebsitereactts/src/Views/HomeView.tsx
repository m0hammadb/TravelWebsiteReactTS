import HeaderSection from "../Components/HeaderSection";
import NavBar from "../Components/NavBar";
import TripsSection from "../Components/TripsSection";

const HomeView = () => {
    return <>
        <div className="container w-[80%] mx-auto pt-10 flex flex-col">
            
            <NavBar />
            <header className="mt-[100px]">

                <HeaderSection />
            </header>

            <section className="mt-[100px] lg:w-[80%] w-full mx-auto">
                <TripsSection />
            </section>
        </div>
    </>
};



export default HomeView;