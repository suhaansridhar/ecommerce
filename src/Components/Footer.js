import React from 'react'

const Footer = () => {
    let copyright = String.fromCodePoint(0x00A9);
  return (
    <div className='footer--container'>
        <p>Everything is sold directly to consumers {copyright}</p>
    </div>
  )
}

export default Footer
