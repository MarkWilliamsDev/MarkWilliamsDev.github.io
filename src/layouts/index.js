import React from 'react'

import Header from '../components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-24">{children}</div>
    </>
  )
}

export default Layout
