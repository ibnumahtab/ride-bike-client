import React from 'react';
import Iframe from "react-iframe";
import Footer from '../../sharedComponents/Footer/Footer';
import AppBar from '../../sharedComponents/AppBar/AppBar'

const Contact = () => {
    return (
        <>
            <AppBar></AppBar>
            <div className='py-12 bg-gray-700'>
                <h2 className='text-center text-white text-6xl'>Contact US</h2>
            </div>
            <div>
                <Iframe
                    url='https://maps.google.com/maps?q=Suite%20100%20San%20Francisco%2C%20LA%2094107%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near'
                    width='100%'
                    height='400px'
                ></Iframe>
            </div>
            <div className='container mx-auto'>
                <h2 className='text-4xl py-4 text-center primary-color'>
                    Have a Question? Get In Touch
                </h2>
                <p className='text-center pb-8'>
                    Have a question? Want to book any tour plan for yourself or
                    your relative?
                    <br /> Give us a call or send an email to contact the
                    HikingTour.
                </p>
                <div className='flex bg-primary p-12 mb-8 rounded-md'>
                    <div className='w-1/3 text-gray-200'>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                General Information
                            </h2>
                            <p>121 King Street, Melbourne,</p>
                            <p>Victoria 3000 Australia</p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div className='py-8'>
                            <h2 className='text2xl font-bold text-white'>
                                Customer Experience
                            </h2>
                            <p>
                                Hannah Harper - Customer Experience Coordinator
                            </p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                Working Hours
                            </h2>
                            <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
                            <p>Saturday : 10:00 AM - 6:00 PM</p>
                            <p>Sunday : 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <div className='glass-effect p-12 overflow-hidden'>
                            <form action=''>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full bg-gray-700 p-2 outline-none'
                                            type='text'
                                            placeholder='Enter Your Name'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Email'
                                        />
                                    </div>
                                </div>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Phone Number'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <select
                                            className='w-full p-2 text-white bg-gray-700 outline-none'
                                            name=''
                                            id=''
                                        >
                                            <option value='Have you visited us before?*'>
                                                Have you order us before?*
                                            </option>
                                            <option value='New Patient'>
                                                New Customer
                                            </option>
                                            <option value='Returning Patient'>
                                                Returning Customer
                                            </option>
                                            <option value='Other'>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full mb-2'>
                                    <input
                                        className='w-full p-2 bg-gray-700 outline-none'
                                        type='text'
                                        placeholder='Subject'
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className='w-full p-2 bg-gray-700'
                                        name=''
                                        id=''
                                        cols='30'
                                        rows='7'
                                        placeholder='Your Message'
                                    ></textarea>
                                </div>
                                <div>
                                    <input
                                        className='px-4 py-1 bg-black text-white'
                                        type='submit'
                                        value='Submit'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Contact;