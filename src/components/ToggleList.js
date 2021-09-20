import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'

import List from './List'

const ToggleList = ({ ListTitle, list }) => {
  const [showList, setShowList] = useState(false)

  const handleOnClick = () => {
    setShowList(!showList)
  }

  const renderToggleArrow = () => {
    return <ArrowRightRoundedIcon fontSize={'large'} />
  }

  return (
    <>
      <div
        className="flex pt-2"
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
        aria-expanded={showList}
        role="button"
        tabIndex={0}
      >
        <div>
          <div className="relative text-xl font-sans">
            <div className="absolute -inset-x-8 -inset-y-1 flex">
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
      </div>
      <div className="sm:pl-28">{showList ? <List list={list} /> : ''}</div>
    </>
  )
}

export default ToggleList
