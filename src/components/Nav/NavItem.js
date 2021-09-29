import { Link } from 'gatsby'
import React from 'react'
import NavItemContainer from './NavItemContainer'

function NavItem({ content, href }) {
  return (
    <NavItemContainer>
      <Link
        className="hover:underline text-light"
        to={href}
        activeClassName={'underline font-bold'}
      >
        {content}
      </Link>
    </NavItemContainer>
  )
}

export default NavItem
