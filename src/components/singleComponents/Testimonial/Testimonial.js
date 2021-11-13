import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useReviews from '../../../hooks/useReviews';

const Testimonial = () => {
	const [reviews] = useReviews();
	console.log(reviews);
	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const imgUrl = 'https://i.imgur.com/VhKI0hp.png';
	return (
		<div>
			<Slider {...settings}>
				{reviews.map(review => (
					<>
						<div className='pb-24 px-12'>
							<div className='m-2'>
								<div className='component flex max-w-lg pt-16'>
									<div className='w-full rounded bg-gray-100 relative p-8'>
										<div className='flex justify-between'>
											<div className='flex'>
												<div>
													<div
														className='h-12 w-12 rounded-full bg-cover'
														style={{
															backgroundImage: `url(${imgUrl})`,
														}}
													/>
												</div>
												<div className='ml-4'>
													<div className='font-bold'>
														{review?.name}
													</div>
													<div className='mt-1 text-xs text-gray-500'>
														{review?.designation}
													</div>
												</div>
											</div>
											<div className='text-yellow-400 flex items-center'>
												<svg
													className='h-6 w-6'
													xmlns='http://www.w3.org/2000/svg'
													fill='currentColor'
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													viewBox='0 0 24 24'
												>
													<path d='M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z' />
												</svg>
												<span className='text-xl font-bold ml-2'>
													{review?.rating}
												</span>
											</div>
										</div>
										<div className='my-6 border-b' />
										<div className='text-sm'>
											{review?.review}
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</Slider>
		</div>
	);
};

export default Testimonial;
