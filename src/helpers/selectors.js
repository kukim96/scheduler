export function getAppointmentsForDay(state, day) {
  const theDays = state.days.find(element => element.name === day);

  if (!theDays) {
    return [];
  }

 const appointmentId = theDays.appointments;

 const dailyAppointments = [];

 for (const id in state.appointments) {
   if (appointmentId.includes(Number(id))) {
     dailyAppointments.push(state.appointments[id]);
   }
 }
 return dailyAppointments;
}

export const getInterviewersForDay = (state, day) => {
  const dayObj = state.days.find(element => element.name === day);

  if (!dayObj) {
    return [];
  }

  const interviewerIds = dayObj.interviewers;
  const dailyInterviewers = [];

  for (const id in state.interviewers) {
    if (interviewerIds.includes(Number(id))) {
      dailyInterviewers.push(state.interviewers[id])
    }
  }
  return dailyInterviewers;
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