import Plugin from './plugin'
import Manager from '../manager'

class Weather extends Plugin {
  private _active: boolean
  private _location: string
  constructor (config: any, manager: Manager) {
    super(manager)
    this._location = config.location
    this._active = config.active
  }
  public async startDay (): Promise<void> {
    if (this._active) {
      // tslint:disable-next-line: no-floating-promises
      return this._manager.addLine('The Weather in ' + this._location + ' is fine.')
    }
    // TODO: get wetaher form some API
  }
  endDay (): string {
    return ''
  }
}

export default Weather
