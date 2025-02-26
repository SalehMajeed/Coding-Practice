def runner_score(str):
    str = str.strip().split()
    print(str)
    uniqueValue = list(map(int,set(str)))
    uniqueValue.sort()
    print(uniqueValue[-2])

user_input = input('enter value: ')
runner_score(user_input)