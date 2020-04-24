import React from "react"

import styles from "./about.module.scss"

import { graphql, StaticQuery } from "gatsby"

import { FormattedMessage } from "react-intl"
import Bubble from "../bubble/bubble"

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
        </section>

        <section className={styles.contact}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--size-mobile": "120vw",
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
            </div>
          </Bubble>
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
      }
    `}
    render={data => <About data={data} messages={messages} />}
  />
)
