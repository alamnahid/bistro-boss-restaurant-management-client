import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

//import images
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../Shared/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-lg mx-auto mt-20'>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'} ></SectionTitle>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
        autoplay
        
      >
        <SwiperSlide className=''>
            <img src={slide1} alt="" />
            <h3 className='text-3xl uppercase ml-24 -mt-16 '>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
        <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        </SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Category;