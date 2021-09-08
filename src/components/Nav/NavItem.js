import React from 'react'

function NavItem({ text, href }) {
  return (
    <div className="mx-1">
      <a href={href}>{text}</a>
    </div>
  )
}

export default NavItem
