import * as React from "react"
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
import '../styles/main.css'
import headshot from "../images/headshot.jpg";
import Img from "gatsby-image";


// markup
const IndexPage = ({data}) => {
  return( 
  <Layout> 
    <div className="herophoto">
      <div>
        <h1 className="mainHeading"> Hey I'm Zain👋</h1>
        <p>Welcome to my portfolio!</p>
      </div>
      <div>
        <img src={headshot} className="headshot"></img>
      </div>
   
    </div>

  </Layout>
  )
}

export const query = graphql`
query  {
  doodle: file(relativePath: {eq: "doodle.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid 
      }
    }
  }

}
`

export default IndexPage
