

const ContactCard = ({image, title, subtitle}) => {
    return (
        <div className="md:w-[28rem] h-[19rem] border-2">
            <div className="md:w-[28rem] flex justify-center items-center h-[5rem] bg-[#D1A054]">
                    <img src={image} alt="" />
            </div>
            <div className="w-[24rem] mx-auto flex justify-center flex-col items-center h-[12rem] bg-[#F3F3F3]">
                    <p className="text-black font-medium text-2xl">{title}</p>
                    <p className="mt-4 text-[#444444]">{subtitle}</p>
            </div>

            
        </div>
    );
};

export default ContactCard;