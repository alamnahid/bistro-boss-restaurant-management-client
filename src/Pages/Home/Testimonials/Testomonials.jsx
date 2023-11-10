import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testomonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])
    return (
        <div>
             <SectionTitle subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'} ></SectionTitle>

                <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review=><SwiperSlide key={review._id}>

                        <div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review?.rating}
                            readOnly
                            />
                            <p>{review?.details}</p>
                            <h3>{review?.name}</h3>

                        </div>

                    </SwiperSlide>)
                }
       
      </Swiper>
                </div>
        </div>
    );
};

export default Testomonials;