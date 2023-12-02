
import featuredImg from '../../../assets/home/featured.jpg'
import "./Feature.css"
const Feature = () => {
    return (
        <div className="featured-Item bg-fixed ">
           <div className="pt-28">
           <div className="text-center">
            <p className="text-[#D99904] text-xl italic">---Check it out---</p>
            <div className="md:w-[26rem] mx-auto h-1 mt-4 bg-[#E8E8E8]"></div>
            <h1 className="text-white text-[2.5rem] uppercase">FROM OUR MENU</h1>
            <div className="md:w-[26rem] mx-auto mt-6 h-1 bg-[#E8E8E8]"></div>
        </div>
           </div>

                <div className="flex gap-12 pb-28 flex-col md:flex-row justify-center items-center py-8 px-16">
                    <div data-aos="zoom-in-up">
                        <img className='md:w-[40rem] md:h-[25rem]' src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p className="text-white text-xs md:text-2xl">March 20, 2023</p>
                        <p className="text-white text-xs md:text-2xl uppercase">WHERE CAN I GET SOME?</p>
                        <p className="text-white text-xs md:text-xl md:w-[37.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline mt-11 text-white font-semibold text-xl border-t-0 border-l-0 border-r-0">Read More</button>
                    </div>
                </div>
            
        </div>
    );
};

export default Feature;

