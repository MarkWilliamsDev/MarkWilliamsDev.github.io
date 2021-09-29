import React from 'react'

const List = ({ list, isHorizontal = false }) => {
  const renderItems = () => {
    return list.map((item) => {
      return (
        <li key={item} className={`font-noto-serif ${isHorizontal ? 'mx-1' : ''}`}>{`${item} `}</li>
      )
    })
  }

  return <ul>{renderItems()}</ul>
}

export default List
