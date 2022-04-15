import * as React from "react"
import {Link} from 'gatsby'
import "../styles/navbar.css"



// markup
const Header = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
    return(
        <nav>
              <div className="navcontainer">
                <Link to="/" className="sitetitle"  > Zain Thaver</Link>
                <div className="hamburgerMenu">
                  <i onClick={handleClick} className={clicked ?"fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div className={clicked ? "sidebar" : "links"}>
                     <Link to="/" className="nav-link" activeClassName="active-link" > Home</Link>
                     <Link to="/work" className="nav-link" activeClassName="active-link"> Work</Link>
                     <Link to="/contact" className="nav-link" activeClassName="active-link"> Contact</Link>
                </div>
              </div>
        </nav>
    )



}

export default Header