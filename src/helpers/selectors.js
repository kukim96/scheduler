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