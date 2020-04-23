import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/en"
import Image from "../components/image"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"

import Intro from "../components/intro/intro"

import { library, config } from "@fortawesome/fontawesome-svg-core"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-471940596
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

library.add(faPlus)
library.add(faAngleDown)

const IndexPage = props => (
  <Layout location={props.location} delayNavigation={true}>
    <SEO />
    <Header />

    <Intro />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/en/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
