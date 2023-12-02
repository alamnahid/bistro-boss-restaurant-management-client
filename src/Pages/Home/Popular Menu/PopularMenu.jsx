import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/Menu Items/MenuItem";
import Button from "../../Shared/BUtton/Button";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item=>item.category === 'popular')


    return (
        <div className="mt-24 max-w-screen-2xl mx-auto px-4 md:px-0 mb-20">

            <SectionTitle subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} ></SectionTitle>

                <div className="grid gap-8 mt-12 grid-cols-1 xl:grid-cols-2">
                    {
                        popularItems?.map(item=><MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>

               <Link to='/menu'> <div className="mt-14">
                <Button text={'View Full  Menu'}></Button>
                </div></Link>

        </div>
    );
};

export default PopularMenu;