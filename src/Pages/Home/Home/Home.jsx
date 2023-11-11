import Banner from "../Banner/Banner";
import BistroFeatureCard from "../BistroFeatureCard/BistroFeatureCard";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import PopularMenu from "../Popular Menu/PopularMenu";
import Testomonials from "../Testimonials/Testomonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroFeatureCard></BistroFeatureCard>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testomonials/>
        </div>
    );
};

export default Home;