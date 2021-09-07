import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'

import List from './List'

function ToggleList({ toggleText, list }) {
  const [showList, setShowList] = useState(false)

  const handleOnClick = () => {
    setShowList(!showList)
  }

  const renderToggleArrow = () => {
    return !showList ? (
      <ArrowRightRoundedIcon fontSize={'large'} />
    ) : (
      <ArrowDropDownRoundedIcon fontSize={'large'} />
    )
  }

  return (
    <>
      <div
        className="flex"
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
        aria-expanded={showList}
        role="button"
        tabIndex={0}
      >
        <div className="transform hover:scale-110">{renderToggleArrow()}</div>
        <div className="text-xl float-right">{toggleText}</div>
      </div>
      {showList ? <List list={list} /> : ''}
    </>
  )
}

export default ToggleList
