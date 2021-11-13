import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleOnSubmit = (e) => {
        const user = {email}
        fetch("https://morning-ridge-85275.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal(
                        "Congratualations!!!",
                        `You make an admin successfully`,
                        "success"
                    );
                }
                else {
                    swal(
                        "Sorry!!!",
                        `This user not allowed for an admin`,
                        "ok"
                    );
                }
            })
        e.preventDefault();
    };
    return (
        <div className="m-12">
            <h2>Make another admin</h2>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input
                        onBlur={handleOnBlur}
                        className='w-full mb-4 border p-2'
                    />
                    <input
                        className='w-full border p-2 bg-primary'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;