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

export const getInterviewersForDay = (state, day) => {
  const dayObj = state.days.find(element => element.name === day);

  if (!dayObj) {
    return [];
  }

  const appointmentId = dayObj.appointments;
  const result = [];

  for (const id in state.appointments) {
    if (appointmentId.includes(Number(id))) {
      result.push(state.appointments[id])
    }
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