import * as React from "react"
import Layout from "../../components/Layout"
import "./workstyles.css"
import seneca from "../../images/seneca.jpg"
import { navigate } from "gatsby"


// markup
const senRa = () => {

  function backToWork(e:any)
  {
     navigate("/work");
  }
  return (
    <Layout>
      <div className="workDiv">
        <h1> Research Assistant</h1>
        <img src={seneca}></img>
        <p> Worked on a team to add features and maintain the codebase of a web testing framework.</p>
        <button className="returnButton" onClick={backToWork}> See other work</button>
      </div>
    </Layout>
  )
}

export default senRa;