import moment, { Moment } from 'moment'

export default function timeAgo(time: string | Date | Moment | null): string {
  if (!time) return ''

  const d = new Date(moment(time).valueOf())

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
