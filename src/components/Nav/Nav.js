import React from 'react'
import NavItem from './NavItem'

function Nav() {
  return (
    <div className="flex justify-center">
      <NavItem href={'/projects'} text={'Projects'} />
      <NavItem href={'/about'} text={'About'} />
    </div>
  )
}

export default Nav
