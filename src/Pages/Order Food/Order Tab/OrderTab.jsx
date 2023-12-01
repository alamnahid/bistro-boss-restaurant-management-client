import BasicFoodCard from "../../Shared/BasicFood Card/BasicFoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 justify-items-center items-center">
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