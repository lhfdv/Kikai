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



def multi_table(number):
    return '\n'.join(f'{x} * {number} = {x*number}' for x in range (1,11))



def sum_square_even_root_odd(nums):
    return round( sum ( n** ( 0.5 if n % 2 else 2 ) for n in nums ), 2 )



def switch_it_up(number):
    if number == 1:
        return "One"
    elif number == 0:
        return "Zero"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"
    
    
    
import re
def check_password(s):
    passwd = [r'[a-z]', r'[A-Z]', r'\d', r'[!@#$%^&*?]']
    return 'valid' if all([re.search(p, s) for p in passwd]) and not re.search(r'[^a-zA-Z\d!@#$%^&*?]', s) and 8 <= len(s) < 20 else 'not valid'
