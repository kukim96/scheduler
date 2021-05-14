import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

import "./styles.scss"

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW));
  }

  function deleteInterview() {
    transition(DELETE);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      { mode === EMPTY && (<Empty onAdd={() => transition(CREATE)} />)}
      { mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (<Form interviewers={props.interviewers} onSave={save} onCancel={back} />)}
      {mode === SAVE && (<Status message="saving" />)}  
      {mode === DELETE && (<Status message="deleting" />)}
      {mode === CONFIRM && (<Confirm message="Are you sure you would like to delete?" onConfirm={deleteInterview} onCancel={back}/>)}
    </article>
  )
}
