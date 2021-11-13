import React from 'react';
import { FaAward, FaBiking, FaShippingFast } from 'react-icons/fa';

const Advantages = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='text-center text-4xl font-bold my-8'>
                    Advantages
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-lightGray mt-8 rounded-xl text-center p-8'>
                        <div>
                            <FaBiking className='text-6xl my-8 mx-auto text-primary'></FaBiking>
                        </div>
                        <h2 className='text-primary text-2xl font-semibold'>
                            10 day <br /> at home trail
                        </h2>
                        <h3 className='py-4'>
                            The instinct of trail ride for knowing of bike.
                        </h3>
                    </div>
                    <div className='bg-primary rounded-xl text-white text-center p-8'>
                        <div>
                            <FaShippingFast className='text-6xl my-8 mx-auto text-white'></FaShippingFast>
                        </div>
                        <h2 className='text-2xl font-semibold'>
                            Free <br /> Shipping
                        </h2>
                        <h3 className='py-4'>
                            Regarding the discussion of the shipping its all
                            without any cost.
                        </h3>
                        <button className='bg-white px-4 py-2 text-primary rounded'>
                            Learn More
                        </button>
                    </div>
                    <div className='bg-lightGray mt-8 rounded-xl text-center p-8'>
                        <div>
                            <FaAward className='text-6xl my-8 mx-auto text-primary'></FaAward>
                        </div>
                        <h2 className='text-primary text-2xl font-semibold'>
                            4 year/20k <br /> mile warranty
                        </h2>
                        <h3 className='py-4'>
                            Most importantly it's warranty for 4 years. It's
                            huge !
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;