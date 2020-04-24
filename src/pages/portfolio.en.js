import React from "react"

import Layout from "../components/layout/en"
import SEO from "../components/seo/seo"

import Appetizers from "../components/appetizers/appetizers"

import messages from "../i18n/en"

import styles from "./portfolio.module.scss"

const PortfolioPage = props => (
  <div className={styles.content}>
    <Layout
      location={props.location}
      delayNavigation={false}
      pageName={"portfolio"}
    >
      <SEO />

      <Appetizers messages={messages} />
    </Layout>
  </div>
)

export default PortfolioPage
