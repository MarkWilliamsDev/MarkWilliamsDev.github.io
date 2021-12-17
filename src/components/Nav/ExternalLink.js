import React from 'react'

function ExternalLink({ href, content }) {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    </>
  )
}

export default ExternalLink
