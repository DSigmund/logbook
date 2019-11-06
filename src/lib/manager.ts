import path from 'path'
import { promises as fsPromises } from 'fs'

class Manager {

  private _folder: string

  constructor (folder: string) {
    this._folder = folder
  }

  public async addDay (date: string): Promise<void> {
    let data = '# Captain\'s Log ' + date + '\n'
    return fsPromises.writeFile(path.join(this._folder, date + '.md'), data)
  }
}

export default Manager
