import { useState } from 'react';
import { data } from './data';
import Main from './Main';
import Buttons from './Buttons';
import Footer from './Footer';


function Home() {

    const [hotel, setHotel] = useState(data);

        const chosenItem = (searchTerm) => {
            const chosenSection = data.filter(element => element.searchTerm === searchTerm);
            setHotel(chosenSection);
    }


    return(
        <div className='container'>
            <div className='hotel-card'>
                <h1>WELCOME TO OUR HOTEL</h1>
            </div>
            <div className='hotel-card'>
                <Buttons filteredItem ={ chosenItem }/>
            </div>
            <div className='hotel-card'>
                <Main hotelProps={ hotel }/>
            </div>
            <div className='hotel-card'>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;