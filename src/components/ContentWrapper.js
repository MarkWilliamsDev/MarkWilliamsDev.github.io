import React from 'react'

function ContentWrapper({ children }) {
  return (
    <div className="bg-secondary bg-opacity-90">
      <div className="container py-6 text-light flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default ContentWrapper
