import React from 'react';
import bike from "../../../img/banner.png"

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='w-3/5'>
                        <div className='text-5xl font-bold'>
                            <h2>
                                <span className='text-primary'>Discover</span>{" "}
                                your
                            </h2>
                            <h2>
                                Right{" "}
                                <span className='text-primary'>Bikes</span>
                            </h2>
                        </div>
                        <div className='py-8 pr-24 '>
                            <p className="mb-2">
                                You can’t be happier, if you won’t ride your
                                bike. A long, long ride in your bike will clear
                                your mind. And the cycle can sing on the streets
                                of a city.
                            </p>
                            <p>
                                Always back your scooter into the curb and sit
                                where you can see it. The sound of the throttle
                                makes me fall in love with our bike. King of the
                                bikes
                            </p>
                        </div>
                        <div>
                            <button className='bg-primary px-2 py-1 rounded text-white font-semibold'>
                                Check Our Bikes
                            </button>
                        </div>
                    </div>
                    <div className='w-2/5 bg-pink-100 rounded-l-full'>
                        <img className='mx-auto py-8' src={bike} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;