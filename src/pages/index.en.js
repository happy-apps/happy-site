import React from "react"

import Layout from "../components/layout/en"
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
  </Layout>
)

export default IndexPage
