import React from 'react';

const AdBanner = () => {
    return (
        <div
            className="my-12"
            style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0434/2431/7599/files/img-4_1920X.jpg?v=1595580873)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='container mx-auto py-32'>
                <div className='flex'>
                    <div>
                        <h2 className='text-6xl text-primary font-semibold py-8'>BIG SALE</h2>
                        <h3 className='text-4xl pb-12'>
                            NEW BIKE BY MANUFACTURES BIKO
                        </h3>
                        <button className="bg-primary px-4 py-1 text-white rounded">BUY NOW</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default AdBanner;