function Buttons({filteredItem}) {
    return(
        <div>
            <button className="btn" onClick={() => filteredItem('hotel')}>Hotel</button>
            <button className="btn" onClick={() => filteredItem('rooms')}>Rooms</button>
            <button className="btn" onClick={() => filteredItem('restaurant')}>Restaurant</button>
            <button className="btn" onClick={() => filteredItem('spa')}>SPA</button>
            <button className="btn" onClick={() => filteredItem('conference')}>Conference Hall</button>
            <button className="btn" onClick={() => filteredItem('gym')}>Gym</button>
        </div>
    );
}

export default Buttons