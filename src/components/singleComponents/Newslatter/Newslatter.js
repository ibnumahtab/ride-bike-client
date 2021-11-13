import React from 'react';
import './Newslatter.css';

const Newslatter = () => {
	return (
		<div>
			{/* Subscribe Section Starts */}
			<section id='subscribe-section'>
				<div className='container'>
					<div className='subscribe-title'>
						<h2>
							<span>Hurry Up!</span> <br /> Subscribe and get{' '}
							<span>25% OFF!</span>
						</h2>
						<p>
							Limited time offer for this month only. No credit
							card required!
						</p>
					</div>
					<div className='subscribe-form'>
						<form action='#'>
							<input
								type='text'
								placeholder='Your Email Address Here...'
							/>
							<input
								className='btn'
								type='submit'
								defaultValue='Subscribe!'
							/>
						</form>
					</div>
				</div>
			</section>
			{/* Subscribe Section Ends */}
		</div>
	);
};

export default Newslatter;
