import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Slider({users}) {
    console.log("users are 123e:",users)
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {
          users && users.map((ele) => {
                return <SwiperSlide>
                    <div className='flex flex-col h-80 bg-white' style={{border:'solid 1px black', borderRadius:'15%'}}>
                        
                        <div>
                            <img className='border' src="/Images/slideImage.png" alt="" />
                        </div>
                        <div className='flex justify-between mt-6'>
                          <img className='h-28 mx-4' src="/Images/newElipse.svg" alt="" />
                          <div className='flex flex-col right-0 w-[60%]'>
                              <div className='flex justify-between'>
                                  <div>
                                    <h1 className='text-black text-1x1 font-semibold'>{ele.name}</h1>
                                    <h1 className=''>{ele.role}</h1>
                                  </div>
                                  <div className='mr-12'>{ele.rating}</div> 
                              </div>
                              <h1 className='text-sm font-semibold'>{ele.institute}</h1>
                          </div>
                        </div>
                        <div className='flex justify-center items-center px-auto'>
                            <button className='py-1 px-6 rounded-full bg-blue-800'>View Profile</button>
                        </div>
                    </div>
                    
              </SwiperSlide>
            })
        }
        {/* <SwiperSlide>
          <img src='/Images/img_2.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Images/img_3.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Images/img_4.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Images/img_1.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Images/img_3.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Images/img_3.jpg' alt="slide_image" />
        </SwiperSlide> */}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Slider;