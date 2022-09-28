import About from './About';
import Home from './Home';
import ContactUs from './ContactUs';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function NavbarLinks() {
    return(
        <Router>
        <nav className='navbar'>
          <Link to='/' className='nav-links'>Home</Link>
          <Link to='/about' className='nav-links'>About</Link>
          <Link to='/contact' className='nav-links'>Contact Us</Link>
        </nav>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <ContactUs/> } />
      </Routes>
      </Router>
    )
}

export default NavbarLinks;