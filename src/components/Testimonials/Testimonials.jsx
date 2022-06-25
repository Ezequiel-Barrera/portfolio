import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avart: AVATAR1,
        name: 'Tina SharedWorker',
        review: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avart: AVATAR2,
        name: 'Lauren Worker',
        review: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avart: AVATAR3,
        name: 'Janir Torner',
        review: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avart: AVATAR4,
        name: 'Lee Rob',
        review: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
            // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avart, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avart} />
                                </div>
                                    <h5 className='client__name'>{name}</h5>
                                    <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials