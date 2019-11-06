import Manager from '../manager'

abstract class Plugin {

  protected _manager: Manager

  constructor (manager: Manager) {
    this._manager = manager
  }
  abstract startDay (): Promise<void>
  abstract endDay (): string
}

export default Plugin
