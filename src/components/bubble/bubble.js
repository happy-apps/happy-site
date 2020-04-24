import React from "react"

import styles from "./bubble.module.scss"

class Bubble extends React.Component {
  render() {
    return (
      <div
        className={`${styles.bubble} ${
          this.props.animate ? `${styles.animate}` : ""
        }`}
        style={this.props.customStyle}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ({ children, animate, customStyle }) => (
  <Bubble animate={animate} customStyle={customStyle}>
    {children}
  </Bubble>
)
