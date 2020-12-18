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
