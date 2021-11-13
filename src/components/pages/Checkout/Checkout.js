import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useProducts from "../../../hooks/useProducts";
import axios from "axios";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Checkout = () => {
    let { id } = useParams();
    const [products] = useProducts([]);
    const product = products?.find((ele) => ele._id === id);
    console.log(product);
    const tax = 20
    const total = parseInt(product?.productPrice) + tax
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const { _id, ...rest } = product;
        axios
            .post("https://morning-ridge-85275.herokuapp.com/orders", {
                ...data,
                ...rest,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                    swal(
                        "Congratualations!!!",
                        `Your shipping and order information take successfully`,
                        "success"
                    );
                    reset();
                }
            });
    };

    const handlePayment = () => {
        swal(
            "Sorry !!!",
            `Payment method are not available for now, we will launch it asap. For Now we accept only cash on delivery`,
            "Success"
        );
    }

    return (
        <>
            <div className='container p-12 mx-auto'>
                <div className='flex flex-col w-full  mx-auto md:flex-row'>
                    <div className='flex flex-col  border p-2 md:w-2/5'>
                        <h2 className='mb-4 font-bold md:text-xl text-heading text-primary '>
                            Shipping Address
                        </h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='justify-center  w-full mx-auto'
                        >
                            <input
                                className='w-full mb-4 border px-4 py-1 rounded'
                                value={
                                    user?.displayName ? user.DisplayName : "Name Missing"
                                }
                                type='text'
                                placeholder='Your Name'
                                {...register("name")}
                            />
                            <input
                                className='w-full mb-4 border px-4 py-1 rounded'
                                value={user?.email ? user.email : ""}
                                type='email'
                                placeholder='Your Email Address'
                                {...register("email")}
                            />
                            <input
                                className='w-full border mb-4 px-4 py-1 rounded'
                                type='tel'
                                placeholder='Your Mobile Number'
                                {...register("mobileNumber", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full border mb-4 px-4 py-1 rounded'
                                type='text'
                                placeholder='city name'
                                {...register("city", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full border mb-4 px-4 py-1 rounded'
                                type='text'
                                placeholder='your nearer currier service name'
                                {...register("currier", {
                                    required: true,
                                })}
                            />

                            <input
                                className='w-full px-4 py-1 cursor-pointer'
                                type='submit'
                            />
                        </form>
                    </div>
                    <div className='flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5'>
                        <div className='pt-12 md:pt-0 2xl:ps-4'>
                            <h2 className='text-xl font-bold text-primary'>
                                Order Summary
                            </h2>
                            <div className='mt-8'>
                                <div className='flex space-x-4 border p-2'>
                                    <div className='w-1/3'>
                                        <img
                                            className='w-full'
                                            src={product?.productThumb}
                                            alt=''
                                        />
                                    </div>
                                    <div className='w-2/3'>
                                        <h2 className='text-xl text-primary font-bold'>
                                            {product?.productName}
                                        </h2>
                                        <p className='text-sm'>
                                            {product?.brandName}
                                        </p>
                                        <span className='text-red-600'>
                                            Price: ${product?.productPrice}
                                        </span>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-6 h-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-2 mt-8'>
                                <div className='flex p-4 mt-4'>
                                    <h2 className='text-xl text-primary font-bold'>
                                        {product?.productName}
                                    </h2>
                                </div>
                                <div className='flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                                    <h2>Subtotal</h2>
                                    <h2 className='ml-2'>
                                        :${product?.productPrice}
                                    </h2>
                                </div>
                                <div className='flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                                    <h2>Shipping Tax</h2>
                                    <h2 className='ml-2'>:${tax}</h2>
                                </div>
                                <div className='flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0'>
                                    <h2>Total</h2>
                                    <h2 className='ml-2'>:${total}</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='border p-2 mt-8'>
                                <h2>Pay With</h2>
                                <div>
                                    <div className='flex mb-4'>
                                        <div className='flex text-blue-700 font-semibold items-center pr-4'>
                                            <input
                                                className='mr-2'
                                                type='radio'
                                                id='credit-card'
                                                name='fav_language'
                                                value='Credit Card'
                                            />
                                            <FaCreditCard className='pr-1'></FaCreditCard>
                                            <label for='credit-card'>
                                                Credit Card
                                            </label>
                                        </div>
                                        <div className='flex text-blue-700 font-semibold items-center'>
                                            <input
                                                className='mr-2'
                                                type='radio'
                                                id='paypal'
                                                name='fav_language'
                                                value='PayPal'
                                            />
                                            <FaPaypal className='pr-1'></FaPaypal>
                                            <label for='paupal'>PayPal</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <input
                                                className='w-full mb-4 border p-2'
                                                type='text'
                                                placeholder='Card Number'
                                            />
                                        </div>
                                        <div className='flex'>
                                            <input
                                                className='w-1/2 mr-1 border p-2'
                                                type='date'
                                            />
                                            <input
                                                className='w-1/2 ml-1 border p-2'
                                                type='text'
                                                placeholder='CVC'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-4'>
                                        <h2>Service Charge Will Be Added</h2>
                                        <button
                                            onClick={handlePayment}  
                                            className='bg-primary text-white px-12 py-2 rounded'>
                                            Pay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
