import moment = require('moment')
import program = require('commander')
import * as config from './config.json'
import Manager from './lib/manager.js'
import Weather from './lib/plugins/weather.js'


let manager = new Manager(config.logFolder, moment().format(config.dateFormat))

let weather = new Weather(config.plugins.weather, manager)

// TODO: Plugins: Weather, TodoTXT, Nagios, Mails, OTRS, GoogleMail, OutlookCal, GoogleCAL, godville, ...

program
  .command('start')
  .alias('s')
  .description('Start a Day')
  .action(function () {
    try {
      // tslint:disable-next-line: no-floating-promises
      manager.startDay()

      weather.startDay()



      // TODO: let plugins work, end with headline for manual entries

    } catch (error) {
      console.error(error)
    }
  })
program
  .command('end')
  .alias('e')
  .description('End a Day')
  .action(function () {
    console.log('End Day for ' + moment().format(config.dateFormat))
    // TODO: end Day
  })
program
  .command('*')
  .description('Add input to todays Log')
  .action(function () {
    console.log('Logging: ' + process.argv[2])
    // TODO: Add to log
  })

.version('0.0.1')

program.parse(process.argv)
