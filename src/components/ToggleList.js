import React, { useState, useRef, useEffect } from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'

import List from './List'

const ToggleList = ({ ListTitle, list }) => {
  const [showList, setShowList] = useState(false)
  const [extraBottomPadding, setExtraBottomPadding] = useState(0)

  const handleOnClick = () => {
    setShowList(!showList)
  }

  const renderToggleArrow = () => {
    return <ArrowRightRoundedIcon fontSize={'large'} />
  }

  return (
    <>
      <div
        className="flex"
        style={showList ? { paddingBottom: `${extraBottomPadding}px` } : {}}
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
        aria-expanded={showList}
        role="button"
        tabIndex={0}
      >
        <div>
          <div className="relative text-xl float-right font-sans">
            <div className="absolute -inset-x-7 flex">
              <div
                className={`toggle-arrow ${
                  showList ? 'toggled-toggle-arrow' : ''
                } transform hover:scale-110`}
              >
                {renderToggleArrow()}
              </div>
            </div>
            {ListTitle}
          </div>
        </div>
        <div className="absolute inset-y-52 flex flex-col items-left">
          {showList ? <List list={list} setLayoutChange={setExtraBottomPadding} /> : ''}
        </div>
      </div>
    </>
  )
}

export default ToggleList
