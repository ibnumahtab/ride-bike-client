import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import axios from "axios";
import swal from "sweetalert";

const UserReview = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://morning-ridge-85275.herokuapp.com/reviews", {
                ...data,
                email: user?.email,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                    swal(
                        "Congratualations!!!",
                        `You have booking successfully`,
                        "success"
                    );
                    reset();
                }
            });
    };
    return (
        <>
            <div>
                <div className='bg-gray-100'>
                    <div className="w-2/3 ml-8 mt-8 p-4 border rounded">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="w-full border p-2"
                                defaultValue={user?.displayName}
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <input
                                className="w-full border p-2 my-4"
                                {...register("designation", {
                                    required: true,
                                })}
                                placeholder="Company "
                            />
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}
                            <textarea
                                className="w-full border p-2"
                                {...register("review", {
                                    required: true,
                                })}
                                rows="10"
                            ></textarea>
                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}

                            <input
                                className="w-full border p-2 bg-primary" type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReview;