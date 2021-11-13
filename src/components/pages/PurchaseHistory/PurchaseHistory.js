import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const PurchaseHistory = () => {
	const { user } = useAuth();
	const [ordersInfo, setOrdersInfo] = useState([]);
	useEffect(() => {
		fetch(`https://morning-ridge-85275.herokuapp.com/orders`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setOrdersInfo(data);
			});
	}, []);

	const cancelOrder = id => {
		const proceed = swal('Sure to Cancel you Order?');
		if (proceed) {
			const url = `https://morning-ridge-85275.herokuapp.com/orders/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						swal('successfully Cancel Your Order');
						const remainingdata = ordersInfo.filter(
							orderInfo => orderInfo._id !== id
						);
						setOrdersInfo(remainingdata);
					}
				});
		}
	};

	const info = ordersInfo?.find(orderInfo => orderInfo?.email === user.email);
	console.log(info);
	return (
		<div>
			<div className='m-4  p-2 rounded'>
				<div className='grid grid-cols-3 gap-4'>
					{info?.email ? (
						<div className='text-center bg-gray-200 p-8'>
							<img src={info?.productThumb} alt='' />
							<h2 className='py-2'>{info?.productName}</h2>
							<h2>Mobile Number: {info?.mobileNumber}</h2>
							<h2>Address: {info?.city}</h2>
							<h2>Currier Company: {info?.currier}</h2>
							<button
								className='bg-primary mt-4 text-white px-4 py-1 rounded'
								onClick={() => cancelOrder(info?._id)}
							>
								Cancel
							</button>
						</div>
					) : (
						<div className='text-center bg-gray-200 p-8'>
							<h2>Please Do Some Order First</h2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PurchaseHistory;
