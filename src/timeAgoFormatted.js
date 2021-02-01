import moment from 'moment'

export default function timeAgoFormatted(patientJoinedAt) {
  try {
    const joinedAt = moment(patientJoinedAt)

    if (!joinedAt.isValid()) {
      return ''
    }

    const now = moment()

    const twoMinutesFromJoin = moment(joinedAt).add(2, 'minutes')
    const oneHourFromJoin = moment(joinedAt).add(1, 'hour')
    const oneDayFromJoin = moment(joinedAt).add(1, 'day')

    if (now.isAfter(oneDayFromJoin)) {
      const daysDiff = now.diff(joinedAt, 'days')
      const unit = daysDiff >= 2 ? 'DAYS' : 'DAY'
      return `${daysDiff} ${unit}`
    } else if (now.isAfter(oneHourFromJoin)) {
      const hoursDiff = now.diff(joinedAt, 'hours')
      const unit = hoursDiff > 1 ? 'HOURS' : 'HOUR'
      return `${hoursDiff} ${unit}`
    } else if (now.isAfter(twoMinutesFromJoin)) {
      const minutesDiff = now.diff(joinedAt, 'minutes')
      return `${minutesDiff} MIN`
    } else {
      return '1 MIN'
    }
  } catch (error) {
    return ''
  }
}
