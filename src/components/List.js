import React, { useRef, useEffect } from 'react'

const List = ({ list, isHorizontal = false, setLayoutChange }) => {
  const listRef = useRef()
  const listHeight = (listRef?.current?.offsetHeight * 7).toString()

  useEffect(() => {
    setLayoutChange(listHeight)
  }, [listHeight, setLayoutChange])

  const renderItems = () => {
    return list.map((item) => {
      return (
        <div
          ref={listRef}
          id="list"
          key={item}
          className={`font-arvo ${isHorizontal ? 'mx-1' : ''}`}
        >{`${item} `}</div>
      )
    })
  }

  return <>{renderItems()}</>
}

export default List
