import * as React from "react"
import {Link} from 'gatsby'

// markup
const IndexPage = () => {
  return( 
  <div> 
    <h1>Hello People</h1>
    <Link to="/about">Work Experience</Link>
    <Link to="/about">Projects</Link>
    <Link to="/about">Bio</Link>
  </div>
  )
}

export default IndexPage
