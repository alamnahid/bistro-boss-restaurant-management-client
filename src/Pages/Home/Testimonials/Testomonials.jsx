import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import qut from "../../../assets/icon/quote-left 1.svg"
const Testomonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-server-three-sigma.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mt-32 max-w-screen-2xl mx-auto">
            <SectionTitle subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'} ></SectionTitle>
            </div>

                <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review=><SwiperSlide key={review._id}>

                        <div className="text-center mt-12">
                        <Rating className="mx-auto"
                            style={{ maxWidth: 180 }}
                            value={review?.rating}
                            readOnly
                            />
                            <img className="mx-auto mt-12 mb-10" src={qut} alt="" />
                            <p className="md:w-[68rem] mx-auto text-[#444] text-xl">{review?.details}</p>
                            <h3 className="text-[#CD9003] mt-4 text-xs md:text-[1.3rem] font-medium">{review?.name}</h3>

                        </div>

                    </SwiperSlide>)
                }
       
      </Swiper>
                </div>
        </div>
    );
};

export default Testomonials;