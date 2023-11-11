import BasicFoodCard from "../../Shared/BasicFood Card/BasicFoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-8 mt-16">
                    {
                        items?.map(item=><BasicFoodCard
                        key={item._id}
                        item={item}
                        ></BasicFoodCard>)
                    }
                    </div>
            
        </div>
    );
};

export default OrderTab;