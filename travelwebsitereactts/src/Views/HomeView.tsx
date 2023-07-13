import HeaderSection from "../Components/HeaderSection";
import NavBar from "../Components/NavBar";

const HomeView = () => {
    return <>
        <div className="container w-[80%] mx-auto pt-10 flex flex-col">
            
            <NavBar />
            <header className="mt-[100px]">

                <HeaderSection />
            </header>
        </div>
    </>
};



export default HomeView;