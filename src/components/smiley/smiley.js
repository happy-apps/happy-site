import React from "react"

import styles from "./smiley.module.scss"

class Smiley extends React.Component {

  render() {
    return (
      <div className={`${styles.smiley} ${this.props.animate ? `${styles.animate}` : ''}`}>
        <div></div>

        <img src={"/images/smiley.svg"} role="presentation" alt="Smiley" />
      </div>
    )
  }
}

export default ({ animate }) => <Smiley animate={animate}></Smiley>
