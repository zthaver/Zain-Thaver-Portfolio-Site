import * as React from "react"
import Layout from "../components/Layout"
import { Formik, Form } from "formik"
import "../styles/contact.css"
import styled from 'styled-components';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';




const FormStyles = styled.form`
width:100%;
.formGroup
{
  width:100%;
  margin-bottom: 2rem
}
label {
  font-size: 1.1rem;
}
input,
textarea{
  width:100%;
  font-size: 1.1rem;
  padding; 1.2rem;
  color: white;
  outline:none;
  border:none;
  border-radius 8px;
  margin-top: 1rem;
}
textarea{
  min-height: 250px;
  resize: vertical;
}
button[type="submit"]{
  color: black;
  font-size: 1.1rem;
  display: inline-block;
  outline:none;
  border:none;
  padding: 1rem 4rem;
  border-radius:8px;
  cursor:pointer;
}

`

const SendMessageSchema = Yup.object().shape({
name: Yup.string()
.max(50,'Too Long')
.required('Name cannot be empty!'),
email: Yup.string().email('Invalid email').required('Email cannot be empty!'),
message: Yup.string()
.required('Message cannot be empty!'),





});




// markup
const contact = () => {

  const form = React.useRef();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Layout>
      <div className="mainContent">
        <h1> Contact</h1>
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{vertical:"top",horizontal:"right"}}
        message="Message Sent"
      />
        <Formik initialValues={{
            name:'',
            email:'',
            message:''
          }}
          onSubmit={async (values, actions) => {
            await actions.validateForm(values).then((success)=>{
              var sendMessageDetails = {email:values.email,name: values.name ,message: values.message};
              console.log(sendMessageDetails);
              emailjs.send('service_wfpzsk7', 'template_gkw4bkq', sendMessageDetails, 'user_oGearzYTZGyhVqlL710SX')
              .then((result) => {
                  console.log(result);
                  actions.resetForm({values:{name:'',email:'',message:''}});
                  setOpen(true);
                  
                  
              }, (error) => {
                  console.log(error.text);
              });
            }).catch((error)=>{
              
            })
          }}
          validationSchema={SendMessageSchema}
       >
         {formik =>(
          <div className="formContainer">
           <FormStyles onSubmit={formik.handleSubmit}>
             <div className="formGroup">
               <label htmlFor="email"> Email Address</label>
               <input id='email' value={formik.values.email} onChange={formik.handleChange} name='email'></input>
               {formik.errors.email && formik.touched.email ? <div className="formError">    </div> : null}
               {formik.errors.email && formik.touched.email ? <div className="errorText">{formik.errors.email}</div> : null}
             </div>
             <div className="formGroup">
               <label htmlFor="name"> Name</label>
               <input id='name' value={formik.values.name} onChange={formik.handleChange} name='name'></input>
               {formik.errors.name && formik.touched.name ? <div className="formError">    </div> : null}
               {formik.errors.name && formik.touched.name ? <div className="errorText">{formik.errors.name}</div> : null}
             </div>
             <div className="formGroup">
                <label htmlFor="message"> Message</label>
                <textarea id='message' value={formik.values.message} onChange={formik.handleChange} name='message'></textarea>
                {formik.errors.message && formik.touched.message ? <div className="formError">    </div> : null}
                {formik.errors.message && formik.touched.message ? <div className="errorText">{formik.errors.message}</div> : null}
               </div>
            <button type="submit"> Send Message</button>

              
           </FormStyles>
          </div>
         )
         }

        </Formik>
      </div>
    </Layout>
  )
}

export default contact