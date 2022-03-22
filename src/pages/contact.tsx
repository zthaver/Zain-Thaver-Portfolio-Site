import * as React from "react"
import Layout from "../components/Layout"
import { Formik, Form } from "formik"

// markup
const contact = () => {
  return (
    <Layout>
      <div>
        <h1> Contact</h1>
        <Formik initialValues={{
            name:'',
            email:'',
            message:''
          }}
          onSubmit={(values, actions) => {
            console.log(values,actions)
          }}
       >

        </Formik>
      </div>
    </Layout>
  )
}

export default contact