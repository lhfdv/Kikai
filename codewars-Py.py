def solve(arr): 
    rev_arr = list(reversed(arr))
    delete = list(dict.fromkeys(rev_arr))
    arr = list(reversed(delete))
    return arr
    
import math



def litres(time):
    result = time * 0.5
    result = math.floor(result)
    return result

    yesterday
    
    

def next_happy_year(year):
    while True:
        print(year)
        year += 1
        if len(set(str(year))) == 4:
            break
            
    return year



def solution(number):
    sum=0
    i=1
    for i in range(number):
        if i%5==0 or i%3==0:
            sum+=i
    return sum
