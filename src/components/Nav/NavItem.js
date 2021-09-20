import React from 'react'

function NavItem({ text, href }) {
  return (
    <div className="mx-1">
      <a className="hover:underline text-light" href={href}>
        {text}
      </a>
    </div>
  )
}

export default NavItem
