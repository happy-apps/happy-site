import React from "react"

import Bubble from "../bubble/bubble"
import RValue from "../r-value/r-value"

import styles from "./intro.module.scss"

import { FormattedMessage } from "react-intl"

class Intro extends React.Component {
  render() {
    return (
      <>
        <section className={styles.weCreate}>
          <Bubble
            animate={false}
            customStyle={{
              "--size": "34rem",
              "--background": "#75F064",
              "--top": "50%",
              "--left": "50%",
            }}
          >
            <h1>
              <FormattedMessage
                id="we.create"
                values={{
                  strong: (...chunks) => <strong>{chunks}</strong>,
                }}
              />
            </h1>
          </Bubble>
        </section>

        <section className={styles.values}>
          <div className={styles.bubbles}>
            <Bubble
              animate={false}
              customStyle={{
                "--size": "60rem",
                "--background": "#FFE200",
                "--top": "16rem",
                "--left": "-35%",
              }}
            ></Bubble>

            <Bubble
              animate={false}
              customStyle={{
                "--size": "60rem",
                "--background": "#FF80B1",
                "--top": "36rem",
                "--right": "-140%",
              }}
            ></Bubble>

            <Bubble
              animate={false}
              customStyle={{
                "--size": "32rem",
                "--background": "#80D3FF",
                "--bottom": "-25rem",
                "--left": "-25%",
              }}
            ></Bubble>
          </div>

          <p>
            <FormattedMessage
              id="5.rs"
              values={{
                strong: (...chunks) => <strong>{chunks}</strong>,
              }}
            />
          </p>

          <RValue iconName={"reuse"}>
            <h3>
              <FormattedMessage id="reuse.title" />
            </h3>

            <p>
              <FormattedMessage id="reuse.content" />
            </p>
          </RValue>

          <RValue iconName={"recycle"}>
            <h3>
              <FormattedMessage id="recycle.title" />
            </h3>

            <p>
              <FormattedMessage id="recycle.content" />
            </p>
          </RValue>

          <RValue iconName={"reduce"}>
            <h3>
              <FormattedMessage id="reduce.title" />
            </h3>

            <p>
              <FormattedMessage id="reduce.content" />
            </p>
          </RValue>

          <RValue iconName={"repurpose"}>
            <h3>
              <FormattedMessage id="repurpose.title" />
            </h3>

            <p>
              <FormattedMessage id="repurpose.content" />
            </p>
          </RValue>

          <RValue iconName={"refuse"}>
            <h3>
              <FormattedMessage id="refuse.title" />
            </h3>

            <p>
              <FormattedMessage id="refuse.content" />
            </p>
          </RValue>
        </section>
      </>
    )
  }
}

export default () => <Intro />
