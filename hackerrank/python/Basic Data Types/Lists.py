def list_operation(N, commands):
    for _ in range(N):
        command = commands[_]
        type = command[0]
        args = command[1:]
        
number_command = 12
commands = ['insert 0 5', 'insert 1 10', 'insert 0 6', 'print', 'remove 6', 'append 9', 'append 1', 'sort', 'print', 'pop', 'reverse', 'print']
print(list_operation(number_command, commands))