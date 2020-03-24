import React from "react"

import "./smiley.scss"

class Smiley extends React.Component {

  render() {
    return (
      <div className={`smiley ${this.props.animate ? 'animate' : ''}`}>
        <div></div>

        <img src={"/images/smiley.svg"} role="presentation" alt="Smiley" />
      </div>
    )
  }
}

export default ({ animate }) => <Smiley animate={animate}></Smiley>
