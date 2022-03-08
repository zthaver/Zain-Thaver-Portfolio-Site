import * as React from "react"
import {Link} from 'gatsby'
import "../styles/navbar.css"
import zt from "../images/zt.svg";


// markup
const Header = () => {

    return(

        <nav>
              <div className="navcontainer">
              <Link to="/about" className="nav-link" > Zain Thaver</Link>

                <div className="links">
                     <Link to="/" className="nav-link" activeClassName="" > Home</Link>
                     <Link to="/about" className="nav-link" > About</Link>
                     <Link to="/about" className="nav-link"> Projects</Link>
                     <Link to="/about" className="nav-link"> Contact</Link>
                </div>
                <button className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
        </nav>



    )

}

export default Header