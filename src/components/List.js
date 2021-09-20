import React from 'react'

const List = ({ list, isHorizontal = false }) => {
  const renderItems = () => {
    return list.map((item) => {
      return (
        <div
          id="list"
          key={item}
          className={`font-noto-serif ${isHorizontal ? 'mx-1' : ''}`}
        >{`${item} `}</div>
      )
    })
  }

  return <>{renderItems()}</>
}

export default List
