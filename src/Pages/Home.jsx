import Header from "../Header/Header.jsx";
import Navigation from "../Header/Navigation.jsx";
import Pagination from "./Pagination.jsx";
import Announcement from "./Announcement.jsx";
import OtherLinks from "./OtherLinks.jsx";
import ServicesCard from "../Online Services/ServicesCard.jsx";
import Servicecardslid from "../Online Services/Servicecardslid.jsx";
import Footer from "../Footer/Footer.jsx"
import "../css/Home.css";

function Home() {
    return (
        <>

        <Header />
         <Navigation/>
            <Pagination />

            <div className="Side">

                <Announcement />
                <OtherLinks />
            </div>

            <ServicesCard />
<Servicecardslid/>
<Footer/>            


        </>
    );
}

export default Home;