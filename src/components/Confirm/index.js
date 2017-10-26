// @flow
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import style from './style.css'

console.log(style)

type Props = {
  opened: string,
  title: string,
  content: string,
  onOKPress: Function,
  onCanclePress: Function
}

type State = {

}

export default class Confirm extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.root = document.getElementById('modal')
    this.el = document.createElement('div')
    this.el.classList.add('confirm')

    this.renderView = this.renderView.bind(this)
  }

  componentDidMount() {
    this.root.appendChild(this.el)
  }

  componentWillUnmount() {
    this.root.removeChild(this.el)
  }

  renderView () {
    const {
      opened,
      title,
      content,
      onOKPress,
      onCanclePress
    } = this.props

    return (
      <div className={style.container}>
        <div className={style.overlay} onClick={onCanclePress}></div>
        <div className={style.main}>
          <div className={style.top}>
            <div>{title}</div>
          </div>
          <div className={style.body}>
            <div>{content}</div>
          </div>
          <div className={style.bottom}>
            <div>
              <button type="button" onClick={onOKPress}>OK</button>
              <button type="button" onClick={onCanclePress}>Cancle</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return createPortal(this.renderView(), this.el)
  }
}
