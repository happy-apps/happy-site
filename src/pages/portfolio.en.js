import React from "react"

import Layout from "../components/layout/en"
import SEO from "../components/seo/seo"

import Appetizers from "../components/appetizers/appetizers"

import messages from "../i18n/en"

const PortfolioPage = props => (
  <Layout
    location={props.location}
    delayNavigation={false}
    pageName={"portfolio"}
  >
    <SEO />

    <Appetizers messages={messages} />
  </Layout>
)

export default PortfolioPage
