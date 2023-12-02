import { Link } from "react-router-dom";
import MenuItem from "../../Shared/Menu Items/MenuItem";
import Button from "../../Shared/BUtton/Button";


const MenuCategorie = ({ items, title }) => {
    return (
        <div>
            <div className="grid gap-8 mt-12 grid-cols-1 xl:grid-cols-2">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}> <div className='mt-11'><Button text={'ORDER YOUR FAVOURITE FOOD'} ></Button></div></Link>

        </div>
    );
};

export default MenuCategorie;