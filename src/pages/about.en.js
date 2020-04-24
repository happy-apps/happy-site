import React from "react"

import Layout from "../components/layout/en"
import SEO from "../components/seo/seo"

import About from "../components/about/about"

import messages from "../i18n/en"

import styles from "./page.module.scss"

const AboutPage = props => (
  <div className={styles.content}>
    <Layout
      location={props.location}
      delayNavigation={false}
      pageName={"about"}
    >
      <SEO />

      <About messages={messages} />
    </Layout>
  </div>
)

export default AboutPage
