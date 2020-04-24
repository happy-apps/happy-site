import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import styles from "./menu.module.scss"
import { FormattedMessage } from "react-intl"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
        ref={this.props.innerRef}
      >
        <Link to={`/${this.props.langKey}`}>
          <h1 className={styles.home}>
            <FormattedMessage
              id="menu.item.we.create"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h1>
        </Link>
        <Link to={`/${this.props.langKey}/portfolio`}>
          <h1 className={styles.portfolio}>
            <FormattedMessage
              id="menu.item.appetizers"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h1>
        </Link>
        <Link to={`/${this.props.langKey}/about`}>
          <h1 className={styles.about}>
            <FormattedMessage
              id="menu.item.we.are.happy"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </h1>
        </Link>
      </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})
//
// export default () => (
//   <Menu/>
// )
