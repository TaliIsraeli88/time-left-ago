import moment from 'moment'
import { expect } from 'chai'

import timeAgoFormatted from './timeAgoFormatted'

describe('timeAgoFormatted', () => {
  it('Should return an empty string if given an unparseable time', () => {
    const unparseableDateString = 'badstring'
    const expected = ''

    const result = timeAgoFormatted(unparseableDateString)

    expect(result).to.equal(expected)
  })

  describe('When more than a day has passed', () => {
    it('Should format with plural for a delta of more than one day', () => {
      const dateString = moment(Date.now()).subtract(2, 'days').toString()
      const expected = '2 DAYS'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })

    it('Should format with singular for a delta of less than two days', () => {
      const dateString = moment(Date.now()).subtract(2, 'days').add(1, 'second').toString()
      const expected = '1 DAY'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })
  })

  describe('When more than an hour, but less than a day has passed', () => {
    it('Should format with plural for a delta of more than one hour', () => {
      const dateString = moment(Date.now()).subtract(2, 'hours').toString()
      const expected = '2 HOURS'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })

    it('Should format with singular for a delta of less than two hours', () => {
      const dateString = moment(Date.now()).subtract(2, 'hours').add(1, 'second').toString()
      const expected = '1 HOUR'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })
  })

  describe('When less than one hour has passed', () => {
    it('Should format correctly for a delta of two minutes or more', () => {
      const dateString = moment(Date.now()).subtract(2, 'minutes').toString()
      const expected = '2 MIN'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })

    it('Should format correctly for a delta of less than two minutes', () => {
      const dateString = moment(Date.now()).subtract(2, 'minutes').add(1, 'second').toString()
      const expected = '1 MIN'

      const result = timeAgoFormatted(dateString)

      expect(result).to.equal(expected)
    })
  })
})
