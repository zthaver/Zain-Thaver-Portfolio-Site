import * as React from "react"
import Layout from "../components/Layout"
import '../styles/work.css'
import {Button} from "@mui/material"

import { ThemeProvider, createTheme } from '@mui/material/styles'
import seneca from "../images/seneca.jpg";
import bgo from "../images/bgo.png"
import senRa from "./work/senRa"
import senSda from "./work/senSda"
import bgoCollections from "./work/bgoCollections";
import { Link,navigate } from "gatsby";





// markup
const about = () => {

    function detailsButtonOnclick(e:any)
  {
     navigate(`${e.target.id}`);
  }



  return (
 
      <Layout>
        <div className="card">
         <img src={seneca} alt="Avatar"/>
        <div className="container">
          <h4><b>Research Assistant</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton" id="senRA" onClick={detailsButtonOnclick}> Details</button>
        </div>
      </div>
      <div className="card">
         <img src={seneca} alt="Avatar"/>
        <div className="container">
          <h4><b>Service Desk Analyst</b></h4>
          <p>Seneca College</p>
          <button className="detailsButton" id="senSda" onClick={detailsButtonOnclick}> Details</button>
        </div>
      </div>
      <div className="card">
         <img src={bgo} alt="Avatar"/>
        <div className="container">
          <h4><b>Collections Officer</b></h4>
          <p>Bill Gosling Outsourcing</p>
          <button className="detailsButton" id="bgoCollections" onClick={detailsButtonOnclick} > Details</button>
        </div>
      </div>
      </Layout>
  )


}

export default about


