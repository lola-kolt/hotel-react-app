import hotel from './hotel.jpg';
import lobby from './lobby.jpg';
function About() {
    return(
        <div className="container">
            <div className="hotel-card">
                <h1>About Hotel</h1>
            </div>
            <div className="hotel-card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nobis magnam, adipisci voluptas nostrum quasi expedita rerum ad tempore temporibus, quia odit culpa possimus quos assumenda ipsam ullam eum laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, amet nostrum autem magni quaerat ab necessitatibus animi? Quae ducimus saepe tempore numquam, tempora reprehenderit non voluptate nesciunt, quasi autem dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis, error impedit nam hic illo dolorum itaque voluptatum unde, beatae facilis voluptates esse ducimus obcaecati, at maxime quis possimus nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate rerum ducimus nulla magni illo iusto animi quos illum! Sequi, autem aliquid! Nisi, autem! Praesentium temporibus nobis eveniet possimus impedit nulla?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sequi fugit. Accusamus, dolorum veniam officiis odio qui mollitia eveniet nulla impedit sed omnis harum reprehenderit repudiandae corporis aspernatur ipsa fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, voluptas eos consequatur corporis nesciunt neque molestias minima quas, mollitia vero eligendi natus, commodi at quos repellendus blanditiis? Exercitationem, atque perspiciatis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ex saepe facilis reiciendis, recusandae libero illum enim aliquid maiores repudiandae provident facere beatae, earum dolor blanditiis hic? Numquam, molestiae asperiores.</p>
            </div>
            <div className='about-hotel-image'>
                <img src={hotel} alt=" hotel" width="45%"/>
                <img src={lobby} alt="lobby" width="45%" />
            </div>
        </div>
    );
}

export default About;