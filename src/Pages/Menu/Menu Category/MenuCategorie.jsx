import MenuItem from "../../Shared/Menu Items/MenuItem";


const MenuCategorie = ({items}) => {
    return (
        <div>
             <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2">
                    {
                        items?.map(item=><MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
            
        </div>
    );
};

export default MenuCategorie;