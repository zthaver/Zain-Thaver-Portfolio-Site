import * as React from "react"
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
import '../styles/main.css'
import headshot from "../images/headshot.jpg";
import Image from "gatsby-image";
import { Button } from "@mui/material";



// markup
const IndexPage = ({data}) => {



  return( 
  <Layout> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <div className="herophoto">
      <div className="photo">
      <Image fluid={data.headshot.childImageSharp.fluid} className="headshot"/>
      </div>
      <div  className="siteText">
            <h1 className="mainHeading"> Hey I'm Zain👋</h1>
            <h2>Welcome to my portfolio!</h2>
            <Button className="downloadButton"><a className="downloadResume" href={`../../../Zain_Thaver_Resume.pdf`} download>DOWNLOAD RESUME</a></Button>
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
