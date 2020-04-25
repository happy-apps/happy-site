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
      <footer
        className={`${styles.footer} ${
          this.props.pageName === "about" ? styles.about : ""
        }`}
      >
        {this.props.pageName === "home" ? (
          <div className={styles.bike}>
            <Img fluid={this.props.data.happyBikeImage.childImageSharp.fluid} />
          </div>
        ) : (
          undefined
        )}

        {this.props.pageName === "portfolio" ? (
          <div className={styles.jump}>
            <Img fluid={this.props.data.happyJumpImage.childImageSharp.fluid} />
          </div>
        ) : (
          undefined
        )}

        <Bubble
          animate={false}
          customStyle={{
            "--size": "44rem",
            "--background":
              this.props.pageName === "portfolio" ? "#80D3FF" : "#75F064",
            "--bottom": "-58rem",
            "--left": "50%",
          }}
        >
          {this.renderLink()}
          {this.renderCustomFuture()}
        </Bubble>
      </footer>
    )
  }

  renderLink() {
    if (this.props.pageName !== "portfolio" && this.props.pageName !== "home") {
      return undefined
    }

    return (
      <Link
        to={
          this.props.pageName === "portfolio"
            ? `/${this.props.langKey}/about`
            : `/${this.props.langKey}/portfolio`
        }
      >
        <div className={styles.link}>
          <span>
            <FormattedMessage
              id={
                this.props.pageName === "portfolio"
                  ? "menu.item.we.are.happy"
                  : "check.out.appetizers"
              }
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </span>
          <FontAwesomeIcon icon={["fas", "arrow-right"]} size="2x" />
        </div>
      </Link>
    )
  }

  renderCustomFuture() {
    if (this.props.pageName !== "about") {
      return undefined
    }

    return (
      <div className={styles.customFuture}>
        <p>
          <FormattedMessage id="footer.customfuture" />
        </p>

        <img src={"/images/customfuture.svg"} alt="customfuture" />
      </div>
    )
  }
}

export default ({ langKey, pageName }) => (
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
        happyJumpImage: file(relativePath: { eq: "happy-jump.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Footer data={data} langKey={langKey} pageName={pageName} />
    )}
  />
)
