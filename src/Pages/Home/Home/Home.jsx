import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroFeatureCard from "../BistroFeatureCard/BistroFeatureCard";
import Category from "../Category/Category";
import ContactUs from "../Contact Us/ContactUs";
import Feature from "../Feature/Feature";
import PopularMenu from "../Popular Menu/PopularMenu";
import Testomonials from "../Testimonials/Testomonials";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div className="p-1 bg-[#fbf4ef]">
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroFeatureCard></BistroFeatureCard>
            <PopularMenu></PopularMenu>
            {/* <ContactUs></ContactUs> */}
            <Feature></Feature>
            <Testomonials/>
        </div>
    );
};

export default Home;