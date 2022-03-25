import { navigate } from "gatsby";
import * as React from "react"
import seneca from "../../images/seneca.jpg"
import "./workstyles.css"
import Layout from "../../components/Layout"

// markup
const senSda = () => {
  function backToWork(e:any)
  {
     navigate("/work");
  }
  return (
    <Layout>
      <div className="workDiv">
        <h1> Service Desk Anaylst</h1>
        <img src={seneca}></img>
        <p> Worked as a team to provide technical support to Seneca student and faculty.</p>
        <button className="returnButton" onClick={backToWork}> See other work</button>
      </div>
    </Layout>
  )
}

export default senSda;