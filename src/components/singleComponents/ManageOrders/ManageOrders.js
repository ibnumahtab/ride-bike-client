import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

const ManageOrders = () => {
	const [ordersInfo, setOrdersInfo] = useState([]);
	useEffect(() => {
		fetch(`https://ride-bike.herokuapp.com/orders`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setOrdersInfo(data);
			});
	}, []);

	let handelAccept = id => {
		const proceed = swal('Are you sure, You want to Accept this order?');
		if (proceed) {
			// let sliceId = e.target.textContent.slice(6);
			const url = `https://ride-bike.herokuapp.com/orders/${id}`;
			fetch(url, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(),
			})
				.then(res => res.json())
				.then(data => {
					if (data.modifiedCount > 0) {
						swal('Update Successful.');
					}
				});
		}
	};
	const handelCancel = id => {
		const proceed = window.confirm('Are you sure, You want to delete it?');
		if (proceed) {
			// let sliceId = e.target.textContent.slice(6);
			const url = `https://ride-bike.herokuapp.com/orders/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						alert('Successfully delete the data.');
						const remainingdata = ordersInfo.filter(
							orderInfo => orderInfo._id !== id
						);
						setOrdersInfo(remainingdata);
					}
				});
		}
	};
	console.log(ordersInfo);
	return (
		<div className='m-8'>
			<div className='grid grid-cols-3 '>
				{ordersInfo.map(orderInfo => (
					<>
						<div className='bg-gray-200  p-2 rounded'>
							<img
								className='w-1/3 mx-auto'
								src={orderInfo.productThumb}
								alt=''
							/>
							<div>
								<h2>Product Name: {orderInfo?.productName}</h2>
								<h2>Customer Name: {orderInfo?.name}</h2>
								<h2>Delivery City: {orderInfo?.city}</h2>
								<h2>Currier Name: {orderInfo?.currier}</h2>
							</div>
							<div className='mt-4 flex justify-between'>
								{!orderInfo?.status ? (
									<button
										className='bg-primary px-2 py-1 mr-2 text-white'
										onClick={() =>
											handelAccept(orderInfo?._id)
										}
									>
										Approve Order
									</button>
								) : (
									''
								)}
								<button
									className='bg-primary rounded px-2 py-1 text-white'
									onClick={() => handelCancel(orderInfo?._id)}
								>
									Cancel Order
								</button>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default ManageOrders;
