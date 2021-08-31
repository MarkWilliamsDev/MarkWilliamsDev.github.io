import React from 'react'

function Section({ title, body, image }) {
  return (
    <div className="bg-secondary bg-opacity-50 my-32 backdrop-filter backdrop-blur-sm filer drop-shadow">
      <div className="container py-6 text-light flex flex-col justify-center items-center">
        <div className="py-2">
          <h2 className="text-2xl">{title}</h2>
        </div>
        {image}
        <div className="flex justify-center">
          <div className="w-2/3 py-1">
            <p className="text-left">{body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
