import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../theme/theme.scss"
import "../../theme/fonts.scss"
import "../../theme/main.scss"

import { IntlProvider } from "react-intl"
import "@formatjs/intl-pluralrules/polyfill"

import { getCurrentLangKey } from "ptz-i18n"

import Navigation from "../navigation/navigation"
import Footer from "../footer/footer"

import { library, config } from "@fortawesome/fontawesome-svg-core"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-471940596
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

library.add(faPlus)
library.add(faAngleDown)
library.add(faArrowRight)
library.add(faArrowDown)

const Layout = ({
  children,
  location,
  messages,
  delayNavigation,
  pageName,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname)

  return (
    <IntlProvider locale={langKey} messages={messages}>
      <Navigation
        messages={messages}
        delayNavigation={delayNavigation}
        langKey={langKey}
      ></Navigation>

      <main>{children}</main>

      <Footer langKey={langKey} pageName={pageName} />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any.isRequired,
  messages: PropTypes.any.isRequired,
  delayNavigation: PropTypes.bool.isRequired,
  pageName: PropTypes.any.isRequired,
}

export default Layout
