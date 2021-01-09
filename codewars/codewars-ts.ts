export function unluckyDays(year: number): number {
  let res = 0;
  for (let i = 0; i < 12; i++){
    if(new Date(year, i, 13).getDay() === 5){
      res++;
    }
  }
  return res;
}

=========================================================

export function getSum(a: number, b: number): number {
  let min = Math.min(a, b), max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

=========================================================

export class Kata {
  static getCount(str: string) {
    return (str.match(/[aeiou]/g) || []).length;
  }
}

=========================================================

export function overTheRoad(address: number, n: number):number {
  let res = 2 * n + 1 - address;
  return res;
}

=========================================================

export function quarterOf(month: number): number {
  return Math.ceil(month/3);
}

=========================================================

export const booleanToString = (b:boolean):string => {
  return String(b);
};
