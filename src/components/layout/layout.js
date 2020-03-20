import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./layout.css"

import { FormattedMessage, IntlProvider } from "react-intl"
import "@formatjs/intl-pluralrules/polyfill"

import { getCurrentLangKey } from 'ptz-i18n';

const Layout = ({ children, location, messages }) => {
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

  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname);

  return (
    <IntlProvider locale={langKey} messages={messages}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <p>
        <FormattedMessage id="hello" />
      </p>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
  messages: PropTypes.node.isRequired,
}

export default Layout
