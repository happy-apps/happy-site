import React from "react"

import Smiley from "../smiley/smiley"
import Bubble from "../bubble/bubble"

import styles from "./header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startAnimation: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ startAnimation: true })
    }, 750)
  }

  render() {
    return (
      <section className={styles.header}>
        <Smiley animate={this.state.startAnimation}></Smiley>

        <Bubble
          animate={this.state.startAnimation}
          customStyle={{
            "--size": "70vh",
            "--top": "-50%",
            "--left": "-50%",
            "--move-top": "46%",
            "--move-left": "24%",
            "--background": "#7CD3FF",
            "--max-size-mobile": "40vw",
            "--top-mobile": "0%",
            "--move-top-mobile": "32%",
            "--move-left-mobile": "8%",
          }}
        ></Bubble>

        <Bubble
          animate={this.state.startAnimation}
          customStyle={{
            "--size": "60vh",
            "--bottom": "-90vh",
            "--right": "-90vh",
            "--move-bottom": "-50%",
            "--move-right": "-20%",
            "--background": "#FF7EB1",
            "--max-size-mobile": "80vw",
            "--move-bottom-mobile": "-20%",
            "--move-right-mobile": "-86%",
          }}
        ></Bubble>

        <Bubble
          animate={this.state.startAnimation}
          customStyle={{
            "--size": "120vh",
            "--top": "-120vh",
            "--right": "-120vh",
            "--move-top": "-12%",
            "--move-right": "-50%",
            "--background": "#75F064",
            "--max-size-mobile": "90vw",
            "--move-top-mobile": "0",
            "--move-right-mobile": "-100%",
          }}
        ></Bubble>
      </section>
    )
  }
}

export default () => <Header />
