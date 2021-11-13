import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

const AddProducts = () => {
     const {
         register,
         handleSubmit,
         reset,
         formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
         console.log(data);
         axios
             .post("https://morning-ridge-85275.herokuapp.com/products", {...data})
             .then((res) => {
                 console.log(res.data);
                 if (res.data?.insertedId) {
                     swal(
                         "Congratualations!!!",
                         `You have Added a new product successfully`,
                         "success"
                     );
                     reset();
                 }
             });
     };
    return (
        <>
            <div>
                <div className='bg-gray-100 m-12'>
                    <div className='w-2/3  p-4 border rounded'>
                        <h2 className='text-xl pb-4'>
                            Add a new products on your site
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='w-full border p-2 mb-2'
                                {...register("productName", {
                                    required: true,
                                })}
                                placeholder='Product Name'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("productPrice", {
                                    required: true,
                                })}
                                type='number'
                                placeholder='Product Price'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("productPrevPrice", {
                                    required: true,
                                })}
                                type='number'
                                placeholder='Product Previous Price'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("productType", {
                                    required: true,
                                })}
                                placeholder='Product Type'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("productThumb", {
                                    required: true,
                                })}
                                placeholder='Product Image Link'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <textarea
                                className='w-full border p-2 my-2'
                                {...register("productDesc", {
                                    required: true,
                                })}
                                rows='10'
                                placeholder='Product Description'
                            ></textarea>
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("color", {
                                    required: true,
                                })}
                                placeholder='Product Color'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("suspension", {
                                    required: true,
                                })}
                                placeholder='Product Suspension'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("size", {
                                    required: true,
                                })}
                                placeholder='Product Size'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className='w-full border p-2 my-2'
                                {...register("stock", {
                                    required: true,
                                })}
                                placeholder='Product Availability'
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}

                            <input
                                className='w-full border p-2 bg-primary'
                                type='submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProducts;