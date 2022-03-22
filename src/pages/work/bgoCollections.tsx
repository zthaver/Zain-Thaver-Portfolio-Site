import * as React from "react"
import Layout from "../../components/Layout"
import "./workstyles.css"
import bgo from "../../images/bgo.png"
import { navigate } from "gatsby"

// markup
const bgoCollections = () => {


  function backToWork(e:any)
  {
     navigate("/work");
  }
  return (
    <Layout>
      <div className="workDiv">
        <h1> Collections Officer</h1>
        <img src={bgo}></img>
        <p> Took over 300 inbound and outbound calls to arrange payment arrangements for past due customers.</p>
        <button className="returnButton" onClick={backToWork}> See other work</button>
      </div>
    </Layout>
  )
}

export default bgoCollections;