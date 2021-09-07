import React from 'react'

function Header() {
  return (
    <div className="bg-primary bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-center text-center px-3 py-12 my-6">
          <div className="text-3xl md:text-4xl lg:text-5xl text-light">
            <h1>Mark Williams Web Development</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
