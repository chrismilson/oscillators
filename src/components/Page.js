import React from 'react'
import Meta from './Meta'

function Page (props) {
  return (
    <div className={['Page', props.className || ''].join(' ')}>
      <Meta {...props} />
      {props.children}
    </div>
  )
}

export default Page
