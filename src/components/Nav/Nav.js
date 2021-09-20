import React from 'react'
import NavItem from './NavItem'

function Nav() {
  return (
    <div className="flex justify-center">
      <NavItem href={'/'} text={'Home'} />
      <NavItem href={'/projects'} text={'Projects'} />
    </div>
  )
}

export default Nav
