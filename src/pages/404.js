import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
        <div style={{textAlign: "center", margin: "15vh 0 60vh 0"}}>
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist...</p>
        </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`