import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Slider({ users }) {
  return (
    <div className="container w-full">
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
          users && users.map((ele, index) => {
            return <SwiperSlide key={index}>
              <div className='flex flex-col rounded-3xl h-[19vw] bg-white' style={{ border: 'solid 1px black', borderRadius: '15%' }}>
                <div>
                  <img className='border' src="/Images/slideImage.png" alt="" />
                </div>
                <div className='flex justify-between mt-6'>
                  <img className='h-[7vw] w-[7vw] rounded-full mx-4' src={ele.avatarUrl} alt="" />
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
                  <button className='py-1 px-6 rounded-full bg-sky-400 text-white'>View Profile</button>
                </div>
              </div>

            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}

export default Slider;