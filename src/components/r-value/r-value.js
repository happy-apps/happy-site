import React from "react"

import styles from "./r-value.module.scss"

class RValue extends React.Component {
  render() {
    return (
      <div className={styles.rvalue}>
        <img
          src={`/images/${this.props.iconName}.svg`}
          role="presentation"
          alt={`${this.props.iconName}`}
        />

        {this.props.children}
      </div>
    )
  }
}

export default ({ children, iconName }) => (
  <RValue iconName={iconName}>{children}</RValue>
)
