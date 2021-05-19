import React from "react";

import classnames from "classnames";

import "components/DayListItem.scss"

export default function DayListItem(props) {
  // class depending on props
  const DayListItemClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  // return message with num of spots available
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining"
    } else if (spots === 1) {
      return "1 spot remaining"
    } else {
      return `${spots} spots remaining`
    }
  }

  return (
    <li 
      className={DayListItemClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text-regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}