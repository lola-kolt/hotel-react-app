import { useState} from 'react';
import { hotelsImage } from './hotelsImage';
import nextIcon from './next.png';
import backIcon from './back.png';


function Footer() {

    const [item, setItem] = useState(0);
    const {id, image } = hotelsImage[item];

    const previousImage = () => {
        setItem(item => {
            item--;

            if(item < 0) {
                return hotelsImage.length-1;
            }
            return item;
        })
    }

    const nextImage = () => {
        setItem(item => {
            item++;

            if(item > hotelsImage.length -1) {
                item =0;
            }
            return item;
        })
    }

    return(
        <div className='container'>
            <div className='navbar gallery'>
                <h2>GALLERY</h2>
            </div>
        <div className='about-hotel-image footer-part'>
            <div className='footer-btn'>
                <button className='btn direction' onClick={ previousImage }>
                    <img src={backIcon} alt="back" />
                </button>
            </div>
            <div className='footer-img'>
                <img src={ image } alt="hotelFooter" width="100%" />
            </div>
            <div className='footer-btn'>
                <button className='btn direction' onClick={ nextImage }>
                    <img src={ nextIcon } alt="next-direction" />
                </button>
            </div>
        </div>
        <div className='hotel-card'>
            <h2>CONTACT US</h2>
            <p>6324/9013 Moo 27, Bo Phut, Koh Samui, Surat Thani, 231345 Choeng Mon Beach, Thailand</p>
        </div>
    </div>
    );
}

export default Footer;