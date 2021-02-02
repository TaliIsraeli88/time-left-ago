import { expect } from 'chai'
import timeLeft from './timeLeft'

describe('timeLeft', () => {
  const now = new Date()

  it('should return 1 second left when ttl is less than a second', () => {
    const ttl = 0.9/60
    expect(timeLeft(now, ttl)).to.equal('1 second left')
  })

  it('should return 1 second left if provided ttl that 1 second', () => {
    const ttl = 1/60
    expect(timeLeft(now, ttl)).to.equal('1 second left')
  })

  it('should return the number of seconds that left if provided ttl that is smaller than 59 seconds', () => {
    const ttl = 40/60
    expect(timeLeft(now, ttl)).to.equal('40 seconds left')
  })

  it('should return 1 minutes left if provided ttl that is between 59 and 60 seconds', () => {
    const ttl = 59.5/60
    expect(timeLeft(now, ttl)).to.equal('1 minute left')
  })

  it('should return the number of minutes left if provided ttl that is bigger than 60 seconds and smaller than one hour', () => {
    const ttl = 30
    expect(timeLeft(now, ttl)).to.equal('30 minutes left')
  })

  it('should return 1 hour left if provided ttl that is 60 minutes', () => {
    const ttl = 59.5
    expect(timeLeft(now, ttl)).to.equal('1 hour left')
  })

  it('should return the number of hours left if provided ttl that is bigger than 60 minutes and smaller 24 hours', () => {
    const ttl = 60 * 6
    expect(timeLeft(now, ttl)).to.equal('6 hours left')
  })

  it('should return the number of days left if provided ttl that is bigger than 24 hours', () => {
    const ttl = 60 * 24
    expect(timeLeft(now, ttl)).to.equal('1 day left')
  })

  it('should return the number of days left if provided ttl that is bigger than 24 hours', () => {
    const ttl = 60 * 24 * 345
    expect(timeLeft(now, ttl)).to.equal('345 days left')
  })

  it('should return empty string if time is null', () => {
    expect(timeLeft(null, null)).to.equal('')
  })

  it('should return empty string if ttl is null', () => {
    expect(timeLeft(now, null)).to.equal('')
  })
})
