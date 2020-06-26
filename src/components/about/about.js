import React from "react"

import styles from "./about.module.scss"

import { graphql, StaticQuery } from "gatsby"

import { FormattedMessage } from "react-intl"
import Bubble from "../bubble/bubble"

import Img from "gatsby-image"

class About extends React.Component {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)

    this.state = {
      status: "",
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }

  render() {
    return (
      <>
        <section className={styles.header}>
          <h1>
            <FormattedMessage
              id="menu.item.we.are.happy"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h1>

          <p>
            <FormattedMessage
              id="about.we.are"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </p>

          <p>
            <FormattedMessage id="about.we.create" />
          </p>

          <p>
            <FormattedMessage id="about.social.code" />
          </p>

          <p className={styles.pink}>
            <FormattedMessage id="about.we.love" />
          </p>

          <p>
            <FormattedMessage
              id="about.we.happy"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </p>

          <p>
            <FormattedMessage id="about.peace" />
          </p>
        </section>

        <section className={styles.team}>
          <div className="container">
            <Img
              fluid={this.props.data.samImg.childImageSharp.fluid}
              alt="Sam"
            />
            <p>Sam</p>
          </div>

          <div className="container">
            <Img
              fluid={this.props.data.davidImg.childImageSharp.fluid}
              alt="David"
            />
            <p>David</p>
          </div>

          <div className="container">
            <Img
              fluid={this.props.data.didiImg.childImageSharp.fluid}
              alt="Didi"
            />
            <p>Didi</p>
          </div>

          <div className="container">
            <Img
              fluid={this.props.data.irisImg.childImageSharp.fluid}
              alt="Iris"
            />
            <p>Iris</p>
          </div>

          <div className="container">
            <Img
              fluid={this.props.data.happyImg.childImageSharp.fluid}
              alt="Happy"
            />
            <p>Happy</p>
          </div>
        </section>

        <section className={styles.contact}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--background": "#FFE633",
              "--top": "50%",
              "--left": "50%",
            }}
          >
            <div className="contact-form">
              <h1>
                <FormattedMessage
                  id="about.contact.get.happy.too"
                  values={{
                    strong: (...chunks) => <strong>{chunks}</strong>,
                  }}
                />
              </h1>

              <p>
                <FormattedMessage id="about.contact.way" />
              </p>

              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mzbanoya"
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={this.props.messages["about.contact.your.name"]}
                />
                <input
                  type="email"
                  name="_replyto"
                  placeholder={this.props.messages["about.contact.your.email"]}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={this.props.messages["about.contact.your.phone"]}
                />
                <textarea
                  name="message"
                  placeholder={
                    this.props.messages["about.contact.your.message"]
                  }
                  rows="2"
                ></textarea>

                {this.state.status === "SUCCESS" ? (
                  <p>
                    <FormattedMessage id="about.contact.thanks" />
                  </p>
                ) : (
                  <button>Submit</button>
                )}
                {this.state.status === "ERROR" && (
                  <p>
                    <FormattedMessage id="about.contact.oops" />
                  </p>
                )}
              </form>

              <p>
                <FormattedMessage id="about.contact.language" />
              </p>
            </div>
          </Bubble>
        </section>

        <section className={styles.address}>
          <img
            src={"/images/happy-logo.svg"}
            role="presentation"
            alt="Happy Logo"
          />

          <p>c/o Impact Hub</p>

          <p>Sihlquai 131, 8005 Zurich</p>

          <p>Switzerland</p>
        </section>

        <div className={styles.bubbles}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--top": "20%",
              "--left": "0",
              "--background": "#75F064",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "44rem",
              "--top": "40%",
              "--right": "-70%",
              "--background": "#7CD3FF",
            }}
          ></Bubble>

          <Bubble
            animate={false}
            customStyle={{
              "--size": "24rem",
              "--top": "88%",
              "--left": "8%",
              "--background": "#FF80B1",
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
        davidImg: file(relativePath: { eq: "team/david.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        didiImg: file(relativePath: { eq: "team/didi.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        samImg: file(relativePath: { eq: "team/sam.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        irisImg: file(relativePath: { eq: "team/iris.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        happyImg: file(relativePath: { eq: "team/happy.png" }) {
          childImageSharp {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <About data={data} messages={messages} />}
  />
)
