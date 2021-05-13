export function getAppointmentsForDay(state, day) {
  const theDays = state.days.find(element => element.name === day);

  if (!theDays) {
    return [];
  }

  const result = [];
  for (const id of theDays.appointments) {
    const appointmentId = state.appointments[id];
    result.push(appointmentId);
  }
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  for (const id in state.interviewers) {
    if (Number(id) === interviewerId) {
      return (
        {
          student: interview.student,
          interviewer: state.interviewers[id]
        }
      )
    }
  }

}