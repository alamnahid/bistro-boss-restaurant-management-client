import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import PopularMenu from "../Popular Menu/PopularMenu";
import Testomonials from "../Testimonials/Testomonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testomonials/>
        </div>
    );
};

export default Home;