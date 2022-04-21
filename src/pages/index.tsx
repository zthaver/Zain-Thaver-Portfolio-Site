import * as React from "react"
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
import '../styles/main.css'
import headshot from "../images/headshot.jpg";
import StaticImage from "gatsby-image";
import { Button } from "@mui/material";



// markup
const IndexPage = ({data}) => {



  return( 
  <Layout> 
    <div className="herophoto">
      <div>
      <StaticImage fluid={data.headshot.childImageSharp.fluid} className="headshot"/>
      </div>
      <div  className="siteText">
      <h1 className="mainHeading"> Hey I'm Zain👋</h1>
        <p>Welcome to my portfolio!</p>
        <Button className="downloadButton"><a className="downloadResume" href={`../../../ZainThaver.pdf`} download>Download Resume</a></Button>
      </div>
   
    </div>

  </Layout>
  )
}

export const query = graphql`
query  {
      headshot: file(relativePath: {eq: "headshot.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid 
      }
    }
  }
  }
  `

export default IndexPage
