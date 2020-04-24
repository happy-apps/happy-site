import React from "react"

import styles from "./smiley.module.scss"

import { FormattedMessage } from "react-intl"

class Smiley extends React.Component {
  render() {
    return (
      <div
        className={`${styles.smiley} ${
          this.props.animate ? `${styles.animate}` : ""
        }`}
      >
        <div></div>

        <img src={"/images/smiley.svg"} role="presentation" alt="Smiley" />

        <h1>
          <FormattedMessage
            id="intro.happy"
            values={{
              strong: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
        </h1>
      </div>
    )
  }
}

export default ({ animate }) => <Smiley animate={animate}></Smiley>
