import React from 'react'

import Header from './Header'

function Layout({ children }) {
  return (
    <>
      <Header>
        <div className="text-4xl">
          <h1>Mark Williams the Big Geek</h1>
        </div>
      </Header>
      {children}
    </>
  )
}

export default Layout
