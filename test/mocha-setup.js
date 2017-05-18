import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import td from 'testdouble'
import tdChai from 'testdouble-chai'

chai.use(chaiAsPromised)
chai.use(tdChai(td))

chai.config.includeStack = true
chai.config.showDiff = false
global.expect = chai.expect

// if any unhandled rejections happen in promises, treat them as fatal errors
process.on('unhandledRejection', function(err) {
  throw err
})
