import { Link } from 'gatsby'
import React from 'react'

function NavItem({ text, href }) {
  return (
    <div className="mx-1">
      <Link
        className="hover:underline text-light"
        to={href}
        activeClassName={'underline font-bold'}
      >
        {text}
      </Link>
    </div>
  )
}

export default NavItem
