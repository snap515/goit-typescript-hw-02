/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day{
  Monday='monday', Tuesday='tuesday', Wendesday='wendesday', Thursday='thursday', Friday='friday', Saturday='saturday', Sunday='sunday'
}

function isWeekend(day: Day):boolean {
  return (day === Day.Saturday || day === Day.Sunday)
}