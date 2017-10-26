// @flow

import React from 'react'
import style from './style.css'

type Props = {
  children: Array<React.Node>,
  isActive: boolean
}

function ListView (props: Props): React.Node {
  const {
    children,
    isActive
  } = props

  const [ left, middle, right ] = children

  return (
    <div className={[style.container, isActive ? style.active : ''].join(' ')}>
      <div className={style.left}>{left}</div>
      <div className={style.right}>
        {middle}
        <div className={style.side}>{right}</div>
      </div>
    </div>
  )
}

export default ListView
