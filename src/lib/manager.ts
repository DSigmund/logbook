import path from 'path'
import { promises as fsPromises } from 'fs'

class Manager {

  private _folder: string
  private _date: string

  constructor (folder: string, date: string) {
    this._folder = folder
    this._date = date
  }

  public async startDay (): Promise<void> {
    let data = '# Captain\'s Log ' + this._date + '\n\n'
    return fsPromises.writeFile(path.join(this._folder, this._date + '.md'), data)
  }

  public async addLine (line: string): Promise<void> {
    return fsPromises.appendFile(path.join(this._folder, this._date + '.md'), line + '\n')
  }
}

export default Manager
