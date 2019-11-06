import moment = require('moment')
import program = require('commander')
import * as config from './config.json'
import Manager from './lib/manager.js'

let manager = new Manager(config.logFolder)

// TODO: Plugins: Weather, TodoTXT, Nagios, Mails, OTRS, GoogleMail, OutlookCal, GoogleCAL

program
  .command('start')
  .alias('s')
  .description('Start a Day')
  .action(function () {
    console.log('Start Day for ' + moment().format(config.dateFormat))
    try {
      manager.addDay(moment().format(config.dateFormat))
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
