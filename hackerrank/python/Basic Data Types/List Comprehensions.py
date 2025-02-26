x = int(input('Enter value of x: '))
y = int(input('Enter value of y: '))
z = int(input('Enter value of z: '))
n = int(input('Enter value of n: '))

def list_comprehension(x, y, z, n):
    list = []
    for n1 in range(x+1):
        for n2 in range(y+1):
            for n3 in range(z+1):
                if((n1 + n2 + n3) != n):
                    list.append([n1, n2, n3])
    return list

print(list_comprehension(x, y, z, n))