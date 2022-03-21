import * as React from "react"
import {Link} from 'gatsby'
import "../styles/navbar.css"



// markup
const Header = () => {

    return(
        <nav>
              <div className="navcontainer">
                <Link to="/" className="sitetitle"  > Zain Thaver</Link>
                <div className="links">
                     <Link to="/" className="nav-link" activeClassName="active-link" > Home</Link>
                     <Link to="/work" className="nav-link" activeClassName="active-link"> Work</Link>
                     <Link to="/testing" className="nav-link" activeClassName="active-link"> Projects</Link>
                     <Link to="/contact" className="nav-link" activeClassName="active-link"> Contact</Link>
                </div>
              </div>
        </nav>
    )



}

export default Header