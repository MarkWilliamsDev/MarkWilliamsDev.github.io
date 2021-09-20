import React from 'react'

import Nav from './Nav/Nav'

function Header() {
  return (
    <div className="bg-primary bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-center text-center px-3 py-12 mb-6">
          <div className="text-3xl md:text-4xl lg:text-5xl text-light">
            <h1>Mark Williams Web Development</h1>
          </div>
        </div>
      </div>
      <div className="mb-3 absolute inset-x-0 bottom-0 sm:left-1/3">
        <Nav />
      </div>
    </div>
  )
}

export default Header
