import React from 'react'

export default (props) => {
  return (
    <div style={{
        overflowY: 'scroll',
        height: '90vh',
        marginTop: '2em'
    }}>
      {props.children}
    </div>
  )
}
