def is_leap(year):
    leap = False
    
    if(year %4 == 0 and (year % 100 !=0 or year % 400 == 0)):
        leap = True
    
    return leap

print(is_leap(1990))
print(is_leap(2090))
print(is_leap(1995))