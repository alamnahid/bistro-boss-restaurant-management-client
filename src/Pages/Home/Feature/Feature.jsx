import SectionTitle from "../../Shared/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import "./Feature.css"
const Feature = () => {
    return (
        <div className="featured-Item bg-fixed">
           <SectionTitle subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} ></SectionTitle>

                <div className="flex flex-col md:flex-row justify-center items-center py-8 px-16">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p className="text-white text-2xl">March 20, 2023</p>
                        <p className="text-white text-2xl uppercase">WHERE CAN I GET SOME?</p>
                        <p className="text-white text-xl w-[37.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
            
        </div>
    );
};

export default Feature;