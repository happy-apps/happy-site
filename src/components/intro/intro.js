import React from "react"

import Bubble from "../bubble/bubble"

import styles from "./intro.module.scss"
import { FormattedMessage } from "react-intl"

class Intro extends React.Component {
  render() {
    return (
      <>
        <section className={styles.weCreate}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "40rem",
              "--size-mobile": "120vw",
              "--background": "#75F064",
              "--move-top-mobile": "0",
              "--move-right-mobile": "-100%",
              "--top": "50%",
              "--left": "50%",
            }}
          >
            <h1>
              <FormattedMessage
                id="we.create"
                values={{
                  strong: (...chunks) => <strong>{chunks}</strong>,
                }}
              />
            </h1>
          </Bubble>
        </section>
      </>
    )
  }
}

export default () => <Intro />
