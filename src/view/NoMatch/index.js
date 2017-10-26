// @flow

import React from 'react'

type Props = {
  location: *
}

function NoMatch (props: Props): React.Node {
  const { location } = props
  return (
    <div>
      <h3>
        404
      </h3>
      <div>
        No Match for { location.pathname}
      </div>
    </div>
  )
}

export default NoMatch
