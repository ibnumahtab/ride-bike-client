import React from 'react';
import Footer from '../../sharedComponents/Footer/Footer';
import AppBar from '../../sharedComponents/AppBar/AppBar';
import AdBanner from '../../singleComponents/AdBanner/AdBanner';
import Advantages from '../../singleComponents/Advantages/Advantages';
import Banner from '../../singleComponents/Banner/Banner';
import ShopSection from '../../singleComponents/ShopSection/ShopSection';
import TestimonialSection from '../../singleComponents/TestimonialSection/TestimonialSection';
import AboutHome from '../../singleComponents/HomeAbout/HomeAbout';

const Home = () => {
	return (
		<div>
			<AppBar></AppBar>
			<Banner></Banner>
			<Advantages></Advantages>
			<AboutHome></AboutHome>
			<ShopSection></ShopSection>
			<TestimonialSection></TestimonialSection>
			<AdBanner></AdBanner>
			<Footer></Footer>
		</div>
	);
};

export default Home;
