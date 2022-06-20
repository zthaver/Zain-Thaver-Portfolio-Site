import * as React from "react"
import Layout from "../components/Layout"
import '../styles/work.css'
import { graphql, Link,navigate } from "gatsby";
import TimeLine from "../components/TimeLine"





// markup
const about = ({data}) => {

    function detailsButtonOnclick(e:any)
  {
     navigate(`${e.target.id}`);
  }

console.log(data)

  return (
 
    <Layout>
      <div className="timelineParent">
        <TimeLine></TimeLine>
     </div> 
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


