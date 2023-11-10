

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-[#D99904] text-xl italic">{subHeading}</p>
            <div className="w-[26rem] mx-auto h-1 mt-4 bg-[#E8E8E8]"></div>
            <h1 className="text-black text-[2.5rem] uppercase">{heading}</h1>
            <div className="w-[26rem] mx-auto mt-6 h-1 bg-[#E8E8E8]"></div>
        </div>
    );
};

export default SectionTitle;