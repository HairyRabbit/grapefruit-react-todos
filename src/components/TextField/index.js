// @flow
import React, { Component } from 'react'
import style from './style.css'

type Props = {
  value: string,
  onKeyUp: string => *
}

type State = {
  value: string
}

export default class TextField extends Component<Props, State> {
  constructor(props) {
    super()

    this.state = {
      value: props.value || ''
    }

    this.changeHandle = this.changeHandle.bind(this)
    this.keyUpHandle  = this.keyUpHandle.bind(this)
  }

  changeHandle(evt) {
    const value = evt.target.value
    this.setState({
      value
    })
  }

  keyUpHandle(evt) {
    if(evt.which !== 13) return

    const value = this.state.value
    const handle = this.props.onKeyUp
    if(!handle || value.trim() === '') return

    handle(value)

    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <input {...this.props}
             type="text"
             className={style.container}
             value={this.state.value}
             onChange={this.changeHandle}
             onKeyUp={this.keyUpHandle} />
    )
  }
}
