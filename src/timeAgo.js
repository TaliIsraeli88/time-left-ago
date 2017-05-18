import moment from 'moment'

export default function timeAgo(time) {
  if (!time) return ''

  const _d = moment(time)
  const offset = (_d.utcOffset()*60*1000*-1)
  const d = new Date(_d.valueOf()-offset)

  const cur = new Date()
  const daysAgo = (cur.getTime()-d.getTime())/86400000

  if (daysAgo < 1 && d.getDay() === cur.getDay()) {
    return moment(time).format('LT')
  }
  if (daysAgo < 2 && (d.getDay()+1) === cur.getDay()) {
    return 'Yesterday'
  }
  if (daysAgo<6) {
    return moment(d).format('dddd')
  }
  return moment(d).format('M/D/YY')
}
