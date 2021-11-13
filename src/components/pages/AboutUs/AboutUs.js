import React from 'react';
import AppBar from '../../sharedComponents/AppBar/AppBar';

const AboutUs = () => {
	return (
		<div>
			<AppBar></AppBar>
			<div className='text-center pb-24'>
				<div>
					<div>
						{/* Full width column */}
						<div className='flex mb-4'>
							<div className='w-full bg-gray-300 h-12' />
						</div>
						{/* Two columns */}
						<div className='flex mb-4'>
							<div className='w-1/2 bg-gray-500 h-12' />
							<div className='w-1/2 bg-gray-300 h-12' />
						</div>
						{/* Three columns */}
						<div className='flex mb-4'>
							<div className='w-1/3 bg-gray-500 h-12' />
							<div className='w-1/3 bg-gray-300 h-12' />
							<div className='w-1/3 bg-gray-500 h-12' />
						</div>
					</div>
					<h2 className='md:text-8xl text-5xl text-gray-700 font-extrabold md:pb-10'>
						About Us
					</h2>
					<div>
						{/* Four columns */}
						<div className='flex mb-4'>
							<div className='w-1/4 bg-gray-300 h-12' />
							<div className='w-1/4 bg-gray-500 h-12' />
							<div className='w-1/4 bg-gray-300 h-12' />
							<div className='w-1/4 bg-gray-500 h-12' />
						</div>
						{/* Five columns */}
						<div className='flex mb-4'>
							<div className='w-1/5 bg-gray-300 h-12' />
							<div className='w-1/5 bg-gray-500 h-12' />
							<div className='w-1/5 bg-gray-300 h-12' />
							<div className='w-1/5 bg-gray-500 h-12' />
							<div className='w-1/5 bg-gray-300 h-12' />
						</div>
						{/* Six columns */}
						<div className='flex'>
							<div className='w-1/6 bg-gray-500 h-12' />
							<div className='w-1/6 bg-gray-300 h-12' />
							<div className='w-1/6 bg-gray-500 h-12' />
							<div className='w-1/6 bg-gray-300 h-12' />
							<div className='w-1/6 bg-gray-500 h-12' />
							<div className='w-1/6 bg-gray-300 h-12' />
						</div>
					</div>
				</div>
				<div className='text-lg p-10 text-justify'>
					<p>
						Serendipitously, after saving up every penny that we
						had, we both set off on a life-changing solo backpacking
						trip and met each other along the way. Since then, we
						have traveled to countless countries and four continents
						together. Not knowing what to expect (or how to even run
						a travel blog), we started Adventure in You mainly
						because we wanted to stay connected to something that we
						loved which was traveling. Little did we know that
						starting a travel blog together would end up changing
						our lives as it has ultimately given us the freedom to
						work and live from anywhere in the world.
					</p>
					<br />
					<p>
						Urban Travel Blog is a collective blog of expert travel
						writers, headed up by experienced travel journalist and
						editor Duncan Rhodes, who report on trends, experiences,
						festivals and nocturnal adventures in cities around
						Europe and the world. We publish lovingly-compiled ‘Long
						Weekend’ city guides to all our favourite destinations,
						as well as fresh and insightful feature articles on the
						quirkiest crazes, the most intriguing experiences and
						the best nightlife our boundless curiosity can uncover.
						(Just hover you mouse over the “Adventures” tab on our
						top menu to browse recent posts by category). And
						because everyone needs to smell the flowers – and not
						the coffee – once in a while, we like to offset our
						urban Odysseys with the occasional jaunt in the great
						outdoors in our Escape section.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
