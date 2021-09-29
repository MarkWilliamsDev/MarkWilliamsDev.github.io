import React from 'react'

import Header from '../components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="mt-14">{children}</div>
    </>
  )
}

export default Layout
