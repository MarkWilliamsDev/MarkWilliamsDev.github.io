import React from 'react'

const List = ({ list, isHorizontal = false }) => {
  const renderItems = () => {
    return list.map((item) => {
      return (
        <li
          key={item}
          className={`font-arvo tracking-wider ${isHorizontal ? 'mx-1' : ''}`}
        >{`${item} `}</li>
      )
    })
  }

  return <ul>{renderItems()}</ul>
}

export default List
