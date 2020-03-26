import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/en"
import SEO from "../components/seo/seo"

const SecondPage = props => (
  <Layout location={props.location}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/en/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
