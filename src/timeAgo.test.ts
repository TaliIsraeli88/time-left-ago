import moment from 'moment'
import { expect } from 'chai'

import timeAgo from './timeAgo'

describe('timeAgo', () => {
  it('should return a time string if provided date is today', () => {
    const now = new Date()
    expect(timeAgo(now)).to.equal(moment(now).format('LT'))
  })

  it('should return Yesterday if provided date is one day ago', () => {
    const yesterday = moment().subtract(1, 'days')
    expect(timeAgo(yesterday)).to.equal('Yesterday')
  })

  it('should return day of week if provided date is two days ago', () => {
    const dayBeforeYesterday = moment().subtract(2, 'days')
    expect(timeAgo(dayBeforeYesterday)).to.equal(moment(dayBeforeYesterday).format('dddd'))
  })

  it('should return formatted date if provided date is more than 6 days ago', () => {
    const lastWeek = moment().subtract(7, 'days')
    expect(timeAgo(lastWeek)).to.equal(moment(lastWeek).format('M/D/YY'))
  })

  it('should return empty string if time is null', () => {
    expect(timeAgo(null)).to.equal('')
  })
})
