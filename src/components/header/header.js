import React from "react"

import "./header.scss"

import Smiley from "../smiley/smiley"

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startAnimation: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({startAnimation: true});
    }, 750);
  }

  render() {
    return <section className='header'>
      <Smiley animate={this.state.startAnimation}></Smiley>
    </section>
  }
}

export default () => (
  <Header/>
)
