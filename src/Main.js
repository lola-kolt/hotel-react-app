import { useState } from "react";

function Main({hotelProps}) {

    const[showText, setShowText] = useState(false);

    const showTextClick =(hotelItem) => {
        hotelItem.showMore = !hotelItem.showMore
        setShowText(!showText);
    }
    return(
        <div className="hotel-box">
            {hotelProps.map(hotelItem => {
                const{ id, image, title, description, searhTerm , showMore} = hotelItem;

                return(
                    <div key={ id } className="box">
                        <div className="hotel-card">
                            <img className="image" src={  image } alt="hotelName" width="90%" /> 
                            <h3 className="title">{ title }</h3>
                            <p className="text">{showMore ? description : description.substring(0, 120) + "..." }
                            <button className="more-less" onClick={() => showTextClick(hotelItem)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main;