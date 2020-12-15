export function unluckyDays(year: number): number {
  let res = 0;
  for (let i = 0; i < 12; i++){
    if(new Date(year, i, 13).getDay() === 5){
      res++;
    }
  }
  return res;
}
