import Slider from "react-slick";
import img01 from "../../../img/01.jpg";
import img02 from "../../../img/02.jpg";
import img03 from "../../../img/11.jpg";
import img04 from "../../../img/03.jpg";
import img05 from "../../../img/04.jpg";
import img06 from "../../../img/06.jpg";
import img07 from "../../../img/07.jpg";

const BikeShowcase = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        centerPadding: "60px",
        slidesToShow: 5,
    };

    return (
        <div className='container mx-auto'>
            <Slider {...settings}>
                <img className='w-1/2' src={img01} alt='title or description' />
                <img className='w-1/2' src={img02} alt='title or description' />
                <img className='w-1/2' src={img03} alt='title or description' />
                <img className='w-1/2' src={img04} alt='title or description' />
                <img className='w-1/2' src={img05} alt='title or description' />
                <img className='w-1/2' src={img06} alt='title or description' />
                <img className='w-1/2' src={img07} alt='title or description' />
            </Slider>
        </div>
    );
};

export default BikeShowcase;
