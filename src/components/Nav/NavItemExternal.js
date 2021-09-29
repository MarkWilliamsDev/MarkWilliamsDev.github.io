import React from 'react'
import NavItemContainer from './NavItemContainer'

function NavItemExternal({ href, content }) {
  return (
    <NavItemContainer>
      <a href={href}>{content}</a>
    </NavItemContainer>
  )
}

export default NavItemExternal
