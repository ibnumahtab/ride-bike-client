import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialSection = () => {
    
    return (
        <div className="bg-purple-200">
            <div className="container mx-auto pt-12 pb-24">
                <h2 className="text-4xl pb-12 text-center sec-title">Our Prestigious Clients</h2>
                <Testimonial></Testimonial>
                
            </div>
        </div>
    );
};

export default TestimonialSection;