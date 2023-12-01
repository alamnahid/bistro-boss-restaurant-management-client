import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Category.css"

import SectionTitle from '../../Shared/SectionTitle';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20'>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'} ></SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
        autoplay
        breakpoints={{
          360: {
            slidesPerView: 1.5, // Show 1 card for devices with a width smaller than 360 pixels
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 1.5, // Show 1.5 cards for devices with a width between 360 and 480 pixels
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1.5, // Show 1.5 cards for devices with a width between 480 and 640 pixels
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
      >
        <SwiperSlide className='pb-12'>
       <Link to="/order/salad">
       <div className='swiper1 h-[22.3rem] flex justify-center items-end pb-3'>
          <h1 className='text-white md:text-[2rem] font-bold cin'>Salads </h1>
        </div>
       </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to="/order/soup"><div className='swiper2 h-[22.3rem] flex justify-center items-end pb-3'>
          <h1 className='text-white md:text-[2rem] font-bold cin'>Soups</h1>
        </div></Link>
        </SwiperSlide>


        <SwiperSlide>
        <Link to="/order/pizza"><div className='swiper3 h-[22.3rem] flex justify-center items-end pb-3'>
          <h1 className='text-white md:text-[2rem] font-bold cin'>pizzas</h1>
        </div></Link>
        </SwiperSlide>
        
        <SwiperSlide>
        <Link to="/order/dessert">
        <div className='swiper4 h-[22.3rem] flex justify-center items-end pb-3'>
          <h1 className='text-white md:text-[2rem] font-bold cin'>desserts</h1>
        </div></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/order/salad"><div className='swiper5 h-[22.3rem] flex justify-center items-end pb-3'>
          <h1 className='text-white md:text-[2rem] font-bold cin'>Salads</h1>
        </div></Link>
        </SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Category;

///order/salad