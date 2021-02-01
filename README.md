# time-left-ago

Provide time left and time ago

## Install

```sh
yarn add time-left-ago
```

## Example

```js
import { timeLeft } from 'time-left-ago'

const ttl = 40/60
const timeString = timeLeft(new Date(), ttl)
// => 40 seconds left
```

```js
import { timeAgo } from 'time-left-ago'
import moment from 'moment'

const today = moment() // Sunday
const dayBeforeYesterday = today.subtract(2, 'days')
const dayString = timeAgo(dayBeforeYesterday)
// => Friday
```

`timeAgoFormatted` returns the specified date bucketed by minutes, hours or days.

```js
import { timeAgoFormatted } from 'time-left-ago'

const twoDaysAgo = moment(Date.now()).subtract(2, 'days').toString()
const formatted = timeAgoFormatted(twoDaysAgo) // => '2 DAYS'

const twoHoursAgo = moment(Date.now()).subtract(2, 'hours').toString()
const formatted = timeAgoFormatted(twoHoursAgo) // => '2 HOURS'
```

## License

MIT
