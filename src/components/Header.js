import React from 'react'

function Header({ children }) {
  return (
    <div className="bg-primary bg-opacity-95">
      <div className="container">
        <div className="flex justify-center text-light text-center px-3 py-12 my-6">{children}</div>
      </div>
    </div>
  )
}

export default Header
