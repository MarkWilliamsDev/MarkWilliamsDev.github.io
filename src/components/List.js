import React from 'react'

function List({ list, listTitle }) {
  const renderItems = () => {
    return list.map((item) => {
      return <li key={item}>{item}</li>
    })
  }

  return (
    <div className="flex pt-3 flex-col items-center">
      <h3 className="text-xl">{listTitle}</h3>
      <ul>{renderItems()}</ul>
    </div>
  )
}

export default List
