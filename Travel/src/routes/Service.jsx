import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/trip";

function Service () {
    return (
        <div>

    <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Service"
         btnClass="hide"
         />
         <Trip/>
         <Footer/>
        </div>
       
        
    )


}

export default Service;