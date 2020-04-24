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

const Layout = ({ children, location, messages, delayNavigation }) => {
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

      <Footer langKey={langKey} />
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any.isRequired,
  messages: PropTypes.any.isRequired,
  delayNavigation: PropTypes.bool.isRequired,
}

export default Layout
