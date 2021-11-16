import { Link } from 'gatsby'
import React from 'react'
import NavItemContainer from './NavItemContainer'

function NavItem({ content, href }) {
  return (
    <NavItemContainer>
      <Link
        className="font-sans text-2xl hover:underline text-light text-lg tracking-wide"
        to={href}
        activeClassName={'underline font-bold'}
      >
        {content}
      </Link>
    </NavItemContainer>
  )
}

export default NavItem
