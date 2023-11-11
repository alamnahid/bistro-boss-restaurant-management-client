

const MenuCover = ({img, title, description}) => {
    return (
        <div>
            <div style={{backgroundImage: `url("${img}")`}} className="menu-cover max-w-screen-2xl mx-auto py-40">

                <div style={{background: "rgba(21, 21, 21, 0.60)"}} className="w-[80rem] mx-auto flex flex-col justify-center items-center text-center h-[21rem]">
                    <h1 className="text-white cin text-[5.5rem] font-bold">{title}</h1>
                    <p className="text-white mx-auto text-[1.5rem] mt-2 text-center">{description}</p> 
                </div>


            </div>

        </div>
    );
};

export default MenuCover;