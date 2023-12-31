import "./BistroFeatureCard.css"

const BistroFeatureCard = () => {
    return (
        <div className="Feature-Container mx-auto mt-20 max-w-screen-2xl py-28">

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="xl:w-[68rem] mx-auto flex flex-col justify-center items-center text-center h-[21rem] bg-white">
                <h1 className="text-black cin text-[2.8rem]">Bistro Boss</h1>
                <p className="text-black mx-auto mt-2 xl:w-[47.5rem] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>


        </div>
    );
};

export default BistroFeatureCard;