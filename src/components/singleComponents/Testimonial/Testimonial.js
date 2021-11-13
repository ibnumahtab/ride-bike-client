import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdReviews } from 'react-icons/md';
import useReviews from '../../../hooks/useReviews';
import { FaUser } from 'react-icons/fa';

const Testimonial = () => {
    const [reviews] = useReviews();
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    reviews.map(review =>
                        <>
    <div class='flex flex-col md:flex-row -mx-4 lg:mx-0'>
        <div class='md:w-1/3 px-4'>
            <FaUser className="text-6xl"></FaUser>
        </div>
        <div class='md:w-2/3 px-4'>
            <div class='relative inline-block mb-8 p-10 bg-gray-500 rounded-lg'>
                <div
                    class='absolute top-0 left-0 -ml-5 mt-10 w-14 h-14 bg-gray-500'
                    style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                ></div>
                <img
                    class='absolute top-0 right-0 md:-mr-6 -mt-6 lg:mt-14'
                    src='zospace-assets/images/quote-circle.svg'
                    alt=''
                />
                <p class='mb-8 text-lg text-gray-200'>
                    {review.review}
                </p>
                <div class='flex mb-4'>
                    <img
                        class='mr-1'
                        src='zospace-assets/images/star-full.svg'
                        alt=''
                    />
                    <img
                        class='mr-1'
                        src='zospace-assets/images/star-full.svg'
                        alt=''
                    />
                    <img
                        class='mr-1'
                        src='zospace-assets/images/star-full.svg'
                        alt=''
                    />
                    <img
                        class='mr-1'
                        src='zospace-assets/images/star-full.svg'
                        alt=''
                    />
                    <img src='zospace-assets/images/star-empty.svg' alt='' />
                </div>
                <h3 class='mb-1 text-2xl text-white font-bold'>
                    {review.name}
                </h3>
                                        <p class='text-white'>{review.designation}</p>
            </div>
        </div>
    </div>
</>
                        )
                }
            </Slider>
        </div>
    );
};

export default Testimonial;