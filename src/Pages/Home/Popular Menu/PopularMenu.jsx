import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/Menu Items/MenuItem";
import Button from "../../Shared/BUtton/Button";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item=>item.category === 'popular')


    return (
        <div className="mt-24 max-w-screen-2xl mx-auto">

            <SectionTitle subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} ></SectionTitle>

                <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2">
                    {
                        popularItems?.map(item=><MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>

                <div className="mt-14">
                <Button text={'View Full  Menu'}></Button>
                </div>

        </div>
    );
};

export default PopularMenu;