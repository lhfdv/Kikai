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
