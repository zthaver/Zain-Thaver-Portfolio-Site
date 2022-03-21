import * as React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout";
import '../styles/main.css'
import headshot from "../images/headshot.jpg";


// markup
const IndexPage = () => {
  return( 
  <Layout> 
    <div className="herophoto">
       <img src={headshot} className="headshot"></img>
    </div>

  </Layout>
  )
}

export default IndexPage
