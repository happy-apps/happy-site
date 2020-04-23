import React from "react"

import Img from "gatsby-image"
import { graphql, Link, StaticQuery } from "gatsby"

import styles from "./footer.module.scss"

import Bubble from "../bubble/bubble"
import { FormattedMessage } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <Img fluid={this.props.data.happyBikeImage.childImageSharp.fluid} />
        </div>

        <Bubble
          animate={false}
          customStyle={{
            "--size": "44rem",
            "--background": "#75F064",
            "--bottom": "-58rem",
            "--left": "50%",
          }}
        >
          <Link to={`/${this.props.langKey}/appetizers`}>
            <div className={styles.link}>
              <span>
                <FormattedMessage
                  id="check.out.appetizers"
                  values={{
                    strong: (...chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </span>
              <FontAwesomeIcon icon={["fas", "arrow-right"]} size="2x" />
            </div>
          </Link>
        </Bubble>
      </footer>
    )
  }
}

export default ({ langKey }) => (
  <StaticQuery
    query={graphql`
      query {
        happyBikeImage: file(relativePath: { eq: "happy-bike.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} langKey={langKey} />}
  />
)
