import hotelEntrance from './hotel-contact2.jpg';
import luggage from './luggage2.jpg'

function ContactUs() {
    return(
        <div className="container">
            <div className="hotel-card">
                <h1>Contact Us</h1>
            </div>
            <div className="hotel-card">
                <div className='contact-text'>
                <p>6324/9013 Moo 27,<br/> 
                Bo Phut, Koh Samui, <br/>
                Surat Thani,<br/>
                231345<br/>
                Choeng Mon Beach,<br/>
                Thailand</p>
                </div>
                <div className='about-hotel-image'>
                    <img src={ hotelEntrance } alt="hotel" width="45%" />
                    <img src={luggage} alt="luggage" width="45%" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;