// @flow
import React, { Component } from 'react'
import style from './style.css'

type Props = {
  checked: string,
  onChange: string => *
}

type State = {
  checked: string
}

export default class CheckBox extends Component<Props, State> {
  constructor(props) {
    super()

    this.state = {
      checked: props.checked || false
    }

    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(evt) {
    const checked = evt.target.checked
    const handle = this.props.onChange

    if(!handle) return

    handle()

    this.setState(state => ({
      checked: !state.checked
    }))
  }

  componentWillReceiveProps(nextProps) {
    const nextChecked = nextProps.checked
    if(nextChecked === this.state.checked) return
    
    this.setState({
      checked: nextChecked
    })
  }

  render() {
    return (
      <div className={[style.container, this.state.checked ? style.active : ''].join(' ')}
            onClick={this.changeHandle}>
        <input {...this.props}
               type="checkbox"
               hidden
               checked={this.state.checked} />
      </div>
    )
  }
}
