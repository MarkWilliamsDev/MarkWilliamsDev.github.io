import React from 'react'

function List({ list }) {
  const renderItems = () => {
    return list.map((item) => {
      return <div key={item} className="custom-list-item">{`${item} `}</div>
    })
  }

  return <div className="flex flex-col items-left">{renderItems()}</div>
}

export default List
