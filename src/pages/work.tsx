import * as React from "react"
import Layout from "../components/Layout"
import '../styles/work.css'
import {Button} from "@mui/material"

import { ThemeProvider, createTheme } from '@mui/material/styles'
import senSda from "./work/senSda"
import bgoCollections from "./work/bgoCollections";
import { graphql, Link,navigate } from "gatsby";
import Img from "gatsby-image";





// markup
const about = ({data}) => {

    function detailsButtonOnclick(e:any)
  {
     navigate(`${e.target.id}`);
  }

console.log(data)

  return (
 
    <Layout>
      <main>
        <div className="card">
          <Img fluid={data.seneca.childImageSharp.fluid} className="img"/>
        <div className="container">
          <h4><b>Research Assistant</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton" id="senRA" onClick={detailsButtonOnclick}> Details</button>
        </div>
      </div>
      <div className="card">
      <Img fluid={data.seneca.childImageSharp.fluid} className="img"/>
        <div className="container">
          <h4><b>Service Desk Analyst</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton" id="senSda" onClick={detailsButtonOnclick}> Details</button>
        </div>
      </div>
      <div className="card">
         <Img fluid={data.bgo.childImageSharp.fluid}   className="img" />
        <div className="container">
          <h4><b>Collections Officer</b></h4>
          <p>Bill Gosling Outsourcing</p>
          <button className="detailsButton" id="bgoCollections" onClick={detailsButtonOnclick} > Details</button>
        </div>
      </div>
     </main> 
    </Layout>
  )
}

export const query = graphql`
query  {
  seneca: file(relativePath: {eq: "seneca.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid 
      }
    }
  }

  bgo: file(relativePath: {eq: "bgo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid 
      }
    }
  }
}
`
export default about


