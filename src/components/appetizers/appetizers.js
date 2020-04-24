import React from "react"

import styles from "./appetizers.module.scss"

import { FormattedMessage } from "react-intl"

import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Appetizers extends React.Component {
  render() {
    return (
      <>
        <section className={styles.header}>
          <h1>
            <FormattedMessage
              id="menu.item.appetizers"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h1>

          <p>
            <FormattedMessage id="portfolio.what.we.do" />
          </p>

          <FontAwesomeIcon icon={["fas", "arrow-down"]} size="2x" />
        </section>

        <section className={styles.portfolio}>
          <Img
            className="interaction"
            fluid={this.props.data.interactionImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.interaction"]}
          />

          <Img
            className="wall"
            fluid={this.props.data.wallImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.wall"]}
          />

          <Img
            className="prototyping"
            fluid={this.props.data.prototypingImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.prototyping"]}
          />
        </section>
      </>
    )
  }
}

export default ({ messages }) => (
  <StaticQuery
    query={graphql`
      query {
        interactionImg: file(
          relativePath: { eq: "portfolio/interaction.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wallImg: file(relativePath: { eq: "portfolio/wall.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prototypingImg: file(
          relativePath: { eq: "portfolio/prototyping.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Appetizers data={data} messages={messages} />}
  />
)
