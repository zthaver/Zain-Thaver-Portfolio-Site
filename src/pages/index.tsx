import * as React from "react"
import {graphql, Link} from 'gatsby'
import Layout from "../components/Layout";
// @ts-ignore: allow side-effect css import without module declarations
import '../styles/main.css'
import Image from "gatsby-image";
import { Button } from "@mui/material";



interface IndexPageProps {
  data: {
    headshot: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

// markup
const IndexPage = ({ data }: IndexPageProps) => {



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
            <Button className="downloadButton"><a className="downloadResume" href={`../../../Zain Resume Developer.docx`} download>DOWNLOAD RESUME</a></Button>
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
