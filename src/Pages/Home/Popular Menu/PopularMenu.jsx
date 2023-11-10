import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/Menu Items/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category === 'popular');
            setMenu(popularItems)
        })
    }, [])
    console.log(menu)


    return (
        <div>

            <SectionTitle subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} ></SectionTitle>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {
                        menu?.map(item=><MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>

        </div>
    );
};

export default PopularMenu;