import React from 'react';
import icon01 from '../../../img/icon-01.png'
import icon02 from '../../../img/icon-02.png'
import icon03 from '../../../img/icon-03.png'
import icon04 from "../../../img/icon-04.png";

const SpecialFeatures = () => {
    return (
        <div>
            <div className='container mx-auto py-24'>
                <h2 className='text-center sec-title pb-12 text-4xl'>
                    Special Features
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <div className='text-center sp-feature-box p-4 shadow-lg'>
                        <img className='mx-auto mb-4' src={icon01} alt='' />
                        <h2 className='text-xl font-semibold py-4'>
                            Light weight
                        </h2>
                        <p>
                            Nunc consequat nibh ut pretium vestibulum nulla
                            facilisi.
                        </p>
                    </div>
                    <div className='text-center sp-feature-box p-4 shadow-lg'>
                        <img className='mx-auto mb-4' src={icon02} alt='' />
                        <h2 className='text-xl font-semibold py-4'>
                            Colors wide range
                        </h2>
                        <p>
                            Morbi in risus in nisi eleifend convallis. Etiam
                            pretium erat volutpat.
                        </p>
                    </div>
                    <div className='text-center sp-feature-box p-4 shadow-lg'>
                        <img className='mx-auto mb-4' src={icon03} alt='' />
                        <h2 className='text-xl font-semibold py-4'>
                            Aerograde aluminium
                        </h2>
                        <p>
                            Etiam tempor facilisis turpis et condimentum
                            pharetra erat.
                        </p>
                    </div>
                    <div className='text-center sp-feature-box p-4 shadow-lg'>
                        <img className='mx-auto mb-4' src={icon04} alt='' />
                        <h2 className='text-xl font-semibold py-4'>
                            Colors wide range
                        </h2>
                        <p>
                            Interdum sedtrium annium erior malesuada ipsum
                            primis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialFeatures;