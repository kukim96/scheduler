import React from "react";

import classnames from "classnames";

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  // class depending on props
  const InterviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })

  return (
    <li
      className={InterviewerListItemClass}
      onClick={() => props.setInterviewer(props.id)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}