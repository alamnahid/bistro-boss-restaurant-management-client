import { Helmet } from 'react-helmet-async';
import MenuCover from '../../Shared/MenuCover/MenuCover';
import img from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/Popular Menu/PopularMenu"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            
            <MenuCover img={img} title={'OUR MENU'}
            description={'Would you like to try a dish?'}></MenuCover>

             <PopularMenu></PopularMenu>   
             <PopularMenu></PopularMenu>   
             <PopularMenu></PopularMenu>   
        </div>
    );
};

export default Menu;