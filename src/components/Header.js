import { StaticImage } from 'gatsby-plugin-image'
import React, { memo } from 'react'

import Nav from './Nav/Nav'
import NavItem from './Nav/NavItem'
import NavItemExternal from './Nav/NavItemExternal'

const GitHubLogo = memo(() => {
  return (
    <div style={{ width: '26px' }}>
      <StaticImage
        src="../images/GitHub-Mark-Light-32px.png"
        alt="GitHub Logo"
        width={32}
        height={32}
      />
    </div>
  )
})

const StackOverflowLogo = memo(() => {
  return (
    <div style={{ width: '26px' }}>
      <StaticImage
        src="../images/logo-stackoverflow.png"
        alt="Stack Overflow Logo"
        width={240}
        height={240}
      />
    </div>
  )
})

function Header() {
  return (
    <div className="bg-primary bg-opacity-90 backdrop-filter backdrop-blur-lg pt-6 pb-14">
      <div className="container">
        <div className="flex justify-center text-center px-3">
          <div className="text-3xl md:text-4xl lg:text-5xl text-light tracking-wide">
            <h1>Mark Williams Web Development</h1>
          </div>
        </div>
      </div>
      <div className="mb-3 absolute inset-x-0 bottom-0 sm:left-1/3">
        <Nav>
          <NavItem href={'/'} content={'Home'} />
          <NavItem href={'/projects'} content={'Projects'} />

          <NavItemExternal href={'https://github.com/MarkWilliamsDev'} content={<GitHubLogo />} />
          <NavItemExternal
            href={'https://stackoverflow.com/users/13570122/mark-williams'}
            content={<StackOverflowLogo />}
          />
        </Nav>
      </div>
    </div>
  )
}

export default Header
