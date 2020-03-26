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
    }
  }

  componentDidMount() {
    if (this.props.delayNavigation) {
      setTimeout(() => {
        this.setState({ startAnimation: true })
      }, 750)
    }
  }

  render() {
    return (
      <>
        <button
          className={`${styles.navigation} ${
            !this.props.delayNavigation ? `${styles.instant}` : ""
          } ${this.state.startAnimation ? `${styles.animate}` : ""}`}
          title={this.props.messages["menu.explore"]}
          onClick={() => this.toggleMenu()}
        >
          <span>
            <FormattedMessage id="menu.explore"></FormattedMessage>
          </span>
          <FontAwesomeIcon icon={["fas", "plus"]} size="2x" />
        </button>

        <Menu ref={el => (this.childMenu = el)} langKey={this.props.langKey} />
      </>
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
