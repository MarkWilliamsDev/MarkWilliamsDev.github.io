import React from 'react'

function Section({ title, body }) {
  return (
    <section
      className={`bg-secondary pt-4 pb-6 bg-opacity-70 backdrop-filter backdrop-blur-sm text-light`}
    >
      {title && (
        <div className="container flex flex-col justify-center items-center">
          <div className="px-2">
            <h2 className="sm:text-3xl lg:text-4xl text-xl tracking-wide">{title}</h2>
          </div>
        </div>
      )}
      <div className="px-3 text-xl tracking-wide font-serif">{body}</div>
    </section>
  )
}

export default Section
