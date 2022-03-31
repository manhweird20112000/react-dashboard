export class TokenServices {

  static getDataStorage(key: string) {
    const exist = localStorage.getItem(key);
    if (exist) {
      return JSON.parse(exist)
    } else {
      console.error(key, ' not found !')
      return {}
    }
  }

  static setDataStorage(key: string, payload: any) {
    localStorage.setItem(key, JSON.stringify(payload))
  }
}