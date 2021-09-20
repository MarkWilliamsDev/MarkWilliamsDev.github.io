import React from 'react'

function Section({ title, body }) {
  return (
    <section
      className={`bg-secondary pt-4 pb-5 bg-opacity-70 my-32 backdrop-filter backdrop-blur-sm text-light`}
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="px-2">
          <h2 className="sm:text-3xl lg:text-4xl text-xl">{title}</h2>
        </div>
      </div>
      <div className="px-3 text-lg tracking-wide font-serif font-thin">{body}</div>
    </section>
  )
}

export default Section
