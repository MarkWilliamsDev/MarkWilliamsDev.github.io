import React from 'react'

function Section({ title, subTitle, body, link }) {
  return (
    <section
      className={`bg-secondary pt-4 pb-6 bg-opacity-70 backdrop-filter backdrop-blur-sm text-light`}
    >
      <div className="container">
        {title && (
          <div className="container flex flex-col justify-center items-center">
            <div className="px-2">
              <h2 className="sm:text-3xl lg:text-4xl text-xl tracking-wide">{title}</h2>
            </div>
          </div>
        )}
        {subTitle && <h3 className="text-center pt-2">{subTitle}</h3>}
        {link && <div className="text-center pt-2">{link}</div>}
        {body && (
          <div className="px-3 text-xl tracking-wide font-serif">
            <div className="flex flex-col">{body}</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section
