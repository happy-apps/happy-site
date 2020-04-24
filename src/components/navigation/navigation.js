import PropTypes from "prop-types"
import React from "react"

import styles from "./navigation.module.scss"

import Menu from "../menu/menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FormattedMessage } from "react-intl"

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startAnimation: false,
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)

    if (this.props.delayNavigation) {
      setTimeout(() => {
        this.setState({ startAnimation: true })
      }, 1550)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = _$event => {
    const scrolledSize =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    const scrollTrigger = scrolledSize > 40
    if (this.state.scrolled !== scrollTrigger) {
      this.setState({ scrolled: scrollTrigger })
    }
  }

  render() {
    return (
      <nav
        className={`${styles.navigation} ${
          !this.props.delayNavigation ? `${styles.instant}` : ""
        } ${this.state.startAnimation ? `${styles.animate}` : ""} ${
          this.state.scrolled ? `${styles.fix}` : ""
        }`}
      >
        <img
          src={"/images/happy-logo.svg"}
          role="presentation"
          alt="Happy Logo"
          className={`${styles.logo}`}
        />

        <button
          title={
            this.props.messages
              ? this.props.messages["menu.explore"]
              : "Explore"
          }
          onClick={() => this.toggleMenu()}
        >
          <span>
            <FormattedMessage id="menu.explore"></FormattedMessage>
          </span>
          <FontAwesomeIcon icon={["fas", "plus"]} size="2x" />
        </button>

        <Menu ref={el => (this.childMenu = el)} langKey={this.props.langKey} />
      </nav>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

Navigation.propTypes = {
  messages: PropTypes.any.isRequired,
  delayNavigation: PropTypes.bool.isRequired,
  langKey: PropTypes.string.isRequired,
}

export default Navigation
