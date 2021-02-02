import moment from 'moment'

export default function timeAgoFormatted(t: string) {
  try {
    const time = moment(t)

    if (!time.isValid()) {
      return ''
    }

    const now = moment()

    const twoMinutesFromJoin = moment(time).add(2, 'minutes')
    const oneHourFromJoin = moment(time).add(1, 'hour')
    const oneDayFromJoin = moment(time).add(1, 'day')

    if (now.isAfter(oneDayFromJoin)) {
      const daysDiff = now.diff(time, 'days')
      const unit = daysDiff >= 2 ? 'DAYS' : 'DAY'
      return `${daysDiff} ${unit}`
    } else if (now.isAfter(oneHourFromJoin)) {
      const hoursDiff = now.diff(time, 'hours')
      const unit = hoursDiff > 1 ? 'HOURS' : 'HOUR'
      return `${hoursDiff} ${unit}`
    } else if (now.isAfter(twoMinutesFromJoin)) {
      const minutesDiff = now.diff(time, 'minutes')
      return `${minutesDiff} MIN`
    } else {
      return '1 MIN'
    }
  } catch (error) {
    return ''
  }
}
