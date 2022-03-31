import moment from 'moment';

export class Helper {
  static env(key: string): string {
    if (process.env[key]) {
      return process.env[`${key}`] || '';
    } else {
      console.error('Not Found: ', key);
      return '';
    }
  }

  static formatDate(time: string, type: string): string {
    return moment(time).format(type);
  }

  static formatMoney(
    money: number,
    nation: 'en-US' = 'en-US',
    currency: 'VND' | 'USD' = 'USD'
  ): string {
    const formatter = Intl.NumberFormat(nation, {
      style: 'currency',
      currency: currency,
    });
    return formatter.format(money);
  }


  static getParams(o: any) {
    const payload: any = {};
    for (let i in o) {
      if (o[i] !== null && o[i] !== '' && o[i] !== undefined) {
        payload[i] = o[i];
      }
    }
    return payload;
  }


}
