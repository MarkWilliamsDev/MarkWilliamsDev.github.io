import React from 'react'
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'

function Toggle({ setIsToggled, isToggled, toggleText }) {
  const handleOnClick = () => {
    setIsToggled(!isToggled)
  }

  const renderToggleArrow = () => {
    return !isToggled ? (
      <ArrowRightRoundedIcon fontSize={'large'} />
    ) : (
      <ArrowDropDownRoundedIcon fontSize={'large'} />
    )
  }

  return (
    <div
      onClick={handleOnClick}
      onKeyDown={handleOnClick}
      aria-expanded={isToggled}
      role="button"
      tabIndex={0}
    >
      {renderToggleArrow()}
      <div className="text-xl float-right">{toggleText}</div>
    </div>
  )
}

export default Toggle
