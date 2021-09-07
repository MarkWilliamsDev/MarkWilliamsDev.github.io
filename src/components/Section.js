import React from 'react'

function Section({ title, body }) {
  return (
    <div className={`bg-secondary bg-opacity-70 my-32 backdrop-filter backdrop-blur-sm`}>
      <div className="container pt-4 pb-5 text-light flex flex-col justify-center items-center">
        <div className="px-2">
          <h2 className="sm:text-3xl lg:text-4xl text-xl">{title}</h2>
        </div>
        <div className="flex justify-center px-3 text-lg font-light tracking-wide">{body}</div>
      </div>
    </div>
  )
}

export default Section
