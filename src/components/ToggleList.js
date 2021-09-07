import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'

import List from './List'

function ToggleList({ setIsToggled, isToggled, toggleText, list }) {
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
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
        aria-expanded={showList}
        role="button"
        tabIndex={0}
      >
        {renderToggleArrow()}
        <div className="text-xl float-right">{toggleText}</div>
      </div>
      {showList ? (
        <div className="flex flex-col items-center">
          <div>
            <List list={list} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ToggleList
