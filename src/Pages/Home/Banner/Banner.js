import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner_1 from '../../../images/Banner/chair.png';
import banner_2 from '../../../images/Banner/sofa.png';
import banner_3 from '../../../images/Banner/nightTable.png';

const Banner = () => {
    return (
        <Carousel variant="dark" controls={false}>
            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
                    <div className='order-1 order-md-0 mt-4 mt-md-0 w-75'>
                        <h1>Easy Chair</h1>
                        <p>Made from Kiln-dried imported Beech veneered engineered wood.High quality environment friendly Italian Ultra Violet (UV) and Polyurethane (PU) Lacquer in antique finish.</p>
                        <button className='brand-btn'>Buy Now</button>
                    </div>
                    <div className='order-0 order-md-1'>
                        <img src={banner_1} alt='chair' className='img-fluid'/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
                    <div className='order-1 order-md-0 mt-4 mt-md-0 w-75'>
                        <h1 className='brand-color'>Fabric Sofa</h1>
                        <p>Imported fabric upholstery with soft and durable cushioning. Fabric can be selected from available options.Any assembly or installation required will be done by our team at the time of delivery (one day after delivery for CKD items)</p>
                        <button className='brand-btn'>Buy Now</button>
                    </div>
                    <div className='order-0 order-md-1'>
                        <img src={banner_2} alt='sofa' className='img-fluid'/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
                    <div className='order-1 order-md-0 mt-4 mt-md-0 w-75'>
                        <h1>Nightstand</h1>
                        <p>Built up with world-class materials, this furniture will give you the best experience ever. Crafted from veneered engineered wood and imported wood for log time durable.</p>
                        <button className='brand-btn'>Buy Now</button>
                    </div>
                    <div className='order-0 order-md-1'>
                        <img src={banner_3} alt='nightstand' className='img-fluid'/>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;