import React from 'react'

function List({ list, listTitle }) {
  const renderItems = () => {
    return list.map((item) => {
      return <li key={item}>{item}</li>
    })
  }

  return (
    <>
      <h3 className="text-xl">{listTitle}</h3>
      <ul>{renderItems()}</ul>
    </>
  )
}

export default List
