import React from "react"

import styles from "./appetizers.module.scss"

import { FormattedMessage } from "react-intl"

import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Bubble from "../bubble/bubble"

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

          <div className="iphone">
            <Img
              fluid={this.props.data.iphoneImg.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.iphone"]}
            />
          </div>

          <div className="prototypes">
            <h2>
              <FormattedMessage
                id="portfolio.happy.prototypes"
                values={{
                  strong: (...chunks) => <strong>{chunks}</strong>,
                }}
              />
            </h2>

            <Img
              fluid={this.props.data.laughImg.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.laugh"]}
            />
          </div>

          <Img
            className="interface"
            fluid={this.props.data.interfaceImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.interface"]}
          />

          <div className="apps">
            <Img
              fluid={this.props.data.ukuleleImg.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.ukulele"]}
            />

            <h2>
              <FormattedMessage
                id="portfolio.happy.apps"
                values={{
                  strong: (...chunks) => <strong>{chunks}</strong>,
                }}
              />
            </h2>
          </div>

          <Img
            className="postits"
            fluid={this.props.data.postitsImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.postits"]}
          />

          <div className="ipad">
            <Img
              fluid={this.props.data.ipadImg.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.ipad"]}
            />
          </div>

          <Img
            className="paper"
            fluid={this.props.data.paperImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.paper"]}
          />

          <div className="working">
            <Img
              fluid={this.props.data.workingImg.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.working"]}
            />
          </div>

          <Img
            className="books"
            fluid={this.props.data.booksImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.books"]}
          />

          <Img
            className="wireframe"
            fluid={this.props.data.wireframeImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.wireframe"]}
          />

          <Img
            className="tester"
            fluid={this.props.data.testerImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.tester"]}
          />

          <h2 className="interactions">
            <FormattedMessage
              id="portfolio.happy.interactions"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h2>

          <div className="ipad2">
            <Img
              fluid={this.props.data.ipad2Img.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.ipad2"]}
            />
          </div>

          <Img
            className="helmet"
            fluid={this.props.data.helmetImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.helmet"]}
          />

          <Img
            className="chat"
            fluid={this.props.data.chatImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.chat"]}
          />

          <div className="working2">
            <Img
              fluid={this.props.data.working2Img.childImageSharp.fluid}
              alt={this.props.messages["portfolio.img.working2"]}
            />
          </div>

          <Img
            className="cat"
            fluid={this.props.data.catImg.childImageSharp.fluid}
            alt={this.props.messages["portfolio.img.cat"]}
          />

          <h2 className="software">
            <FormattedMessage
              id="portfolio.happy.software"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h2>
        </section>

        <div className={styles.bubbles}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "20rem",
              "--top": "40%",
              "--left": "0",
              "--background": "#80D3FF",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--small-size": "24rem",
              "--top": "80%",
              "--right": "-60%",
              "--background": "#FFE200",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "52rem",
              "--small-size": "36rem",
              "--top": "160%",
              "--left": "10%",
              "--background": "#75F064",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "58rem",
              "--small-size": "38rem",
              "--top": "280%",
              "--right": "-80%",
              "--background": "#FF80B1",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "30rem",
              "--top": "400%",
              "--left": "8%",
              "--background": "#80D3FF",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--top": "580%",
              "--left": "-4%",
              "--background": "#FFE200",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "52rem",
              "--small-size": "28rem",
              "--top": "690%",
              "--right": "-60%",
              "--background": "#75F064",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "58rem",
              "--small-size": "38rem",
              "--top": "820%",
              "--left": "8%",
              "--background": "#FF80B1",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "52rem",
              "--small-size": "22rem",
              "--top": "880%",
              "--right": "-40%",
              "--background": "#FFE200",
            }}
          ></Bubble>
        </div>
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
        iphoneImg: file(relativePath: { eq: "portfolio/iphone.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        laughImg: file(relativePath: { eq: "portfolio/laugh.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        interfaceImg: file(relativePath: { eq: "portfolio/interface.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ukuleleImg: file(relativePath: { eq: "portfolio/ukulele.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ipadImg: file(relativePath: { eq: "portfolio/ipad.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        postitsImg: file(relativePath: { eq: "portfolio/postits.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        paperImg: file(relativePath: { eq: "portfolio/paper.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        booksImg: file(relativePath: { eq: "portfolio/books.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        workingImg: file(relativePath: { eq: "portfolio/working.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wireframeImg: file(relativePath: { eq: "portfolio/wireframe.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testerImg: file(relativePath: { eq: "portfolio/tester.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ipad2Img: file(relativePath: { eq: "portfolio/ipad2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        chatImg: file(relativePath: { eq: "portfolio/chat.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        helmetImg: file(relativePath: { eq: "portfolio/helmet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        working2Img: file(relativePath: { eq: "portfolio/working2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        catImg: file(relativePath: { eq: "portfolio/cat.png" }) {
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
