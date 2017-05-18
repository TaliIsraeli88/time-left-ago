import moment from 'moment'
import pluralize from 'pluralize'

export default function timeLeft(time, ttl) {
  if (!time) return ''

  const created = new Date(moment(time))
  const sec = (parseFloat(ttl*60*1000)-(new Date()-created))/1000

  if (sec < 0) {
    return ''
  }
  if (sec <= 59) {
    return `${pluralize('second', Math.ceil(sec), true)} left`
  }
  if (sec > 59 && sec < 3540) {
    return `${pluralize('minute', Math.ceil(sec/60), true)} left`
  }
  if (sec >= 3540 && sec < 86399) {
    return `${pluralize('hour', Math.ceil(sec/3600), true)} left`
  }
  return `${pluralize('day', Math.ceil(sec/86400), true)} left`
}
