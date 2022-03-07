import * as React from "react"
import {Link} from 'gatsby'
import { Navbar ,Nav, Container, NavDropdown} from 'react-bootstrap'
import "../styles/navbar.css"

// markup
const Header = () => {

    return(

        <nav>
              <div className="navcontainer">
                <h1> Zain Thaver </h1>
                <div className="links">
                     <Link to="/about" className="nav-link" > About</Link>
                     <Link to="/about" className="nav-link"> Projects</Link>
                     <Link to="/about" className="nav-link"> Contact</Link>
                </div>
              </div>
              <span></span>
              <span></span>
              <h1> zain</h1>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
        </nav>



    )

}

export default Header