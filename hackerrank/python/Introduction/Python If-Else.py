# Task
# Given an integer, , perform the following conditional actions:

# If  is odd, print Weird
# If  is even and in the inclusive range of 2 to 5, print Not Weird
# If  is even and in the inclusive range of 6 to 20, print Weird
# If  is even and greater than 20, print Not Weird
# Input Format

# A single line containing a positive integer, .

# Constraints

n = int(input('enter number: '));

if(n % 2 == 1):
    print('Weird')
else:
    if(n >= 2 and n <= 5):
        print('Not Weird')
    elif(n >= 6 and n<= 20):
        print('Weird')
    else:
        print('Not Weird')
    
    