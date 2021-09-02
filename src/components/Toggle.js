import React, { useState } from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'

function Toggle({ onClickCallback }) {
  const [toggleState, setToggleState] = useState(false)

  const renderToggleArrow = () => {
    return !toggleState ? (
      <ArrowRightRoundedIcon fontSize={'large'} />
    ) : (
      <ArrowDropDownRoundedIcon fontSize={'large'} />
    )
  }

  const handleOnClick = () => {
    onClickCallback(!toggleState)
    setToggleState(!toggleState)
  }

  return (
    <div
      className="inline-block"
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
      aria-expanded={toggleState}
      role="button"
      tabIndex={0}
    >
      {renderToggleArrow()}
    </div>
  )
}

export default Toggle
