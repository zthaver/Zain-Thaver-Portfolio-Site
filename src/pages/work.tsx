import * as React from "react"
import Layout from "../components/Layout"
import '../styles/work.css'
import {Button} from "@mui/material"

import { ThemeProvider, createTheme } from '@mui/material/styles'
import Seneca from "../images/seneca.jpg";
import bgo from "../images/bgo.png";





// markup
const about = () => {





  return (
 
      <Layout>
        <div className="card">
         <img src={Seneca} alt="Avatar"/>
        <div className="container">
          <h4><b>Research Assistant</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton"> Details</button>
        </div>
      </div>
      <div className="card">
         <img src={Seneca} alt="Avatar"/>
        <div className="container">
          <h4><b>Service Desk Analyst</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton"> Details</button>
        </div>
      </div>
      <div className="card">
         <img src={bgo} alt="Avatar"/>
        <div className="container">
          <h4><b>Collections Officer</b></h4>
          <p>Bill Gosling Outsourcing</p>
          <button className="detailsButton"> Details</button>
        </div>
      </div>
      </Layout>
  )
}

export default about


