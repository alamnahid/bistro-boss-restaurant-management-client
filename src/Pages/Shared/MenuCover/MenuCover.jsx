import { Parallax } from 'react-parallax';


const MenuCover = ({img, title, description}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="our menu"
        strength={-200}
    >
        <div>
            
            <div className="menu-cover max-w-screen-2xl mx-auto py-20 lg:py-40">

                <div style={{background: "rgba(21, 21, 21, 0.60)"}} className="lg:w-[80rem] mx-auto flex flex-col justify-center items-center text-center lg:h-[21rem]">
                    <h1 className="text-white cin text-[2rem] lg:text-[5.5rem] font-bold">{title}</h1>
                    <p className="text-white lg:w-[53rem] mx-auto lg:text-[1.5rem] mt-2 text-center">{description}</p> 
                </div>


            </div>

        </div>
    </Parallax>


        
    );
};

export default MenuCover;