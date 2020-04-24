import React from "react"

import Layout from "../components/layout/en"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"

import Intro from "../components/intro/intro"

const IndexPage = props => (
  <Layout location={props.location} delayNavigation={true} pageName={"home"}>
    <SEO />
    <Header />

    <Intro />
  </Layout>
)

export default IndexPage
