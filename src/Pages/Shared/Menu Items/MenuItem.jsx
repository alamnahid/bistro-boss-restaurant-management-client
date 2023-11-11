

const MenuItem = ({ item }) => {

    const { name, image, recipe, price } = item;


    return (
        <div>

            <div className="flex justify-center">
                <img className="w-[7.3rem] h-[6.5rem]" style={{
                    borderRadius: "0rem 12.5rem 12.5rem 12.5rem"
                }} src={image} alt="food image" />
                <div className="ml-8">
                    <h3 className="text-[#151515] uppercase text-xl .cin">ROAST DUCK BREAST ------------------</h3>
                    <p className="text-[#737373] w-[27.5rem] text-base mt-2">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                </div>
               
                    <p className="text-[#BB8506] ml-1 text-xl">$14.5</p>
                
            </div>


        </div>
    );
};

export default MenuItem;