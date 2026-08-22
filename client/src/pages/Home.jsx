import Hero from "../component/Hero";
import Features from "../component/Features";
import LeadForm from "../component/LeadForm";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


function Home(){
return(
    <div >
        <Navbar/>
        <Hero/>
        <Features />
        <LeadForm/>
        <Footer/>
    </div>
)
}

export default Home;