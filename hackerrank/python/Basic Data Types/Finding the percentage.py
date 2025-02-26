from operator import le


def calculate_percentage(n, student_list, student_name):
    student_marks = {}
    for _ in range(n):
        name, *line = student_list[_].split()
        scores = list(map(float, line))
        student_marks[name] = scores

    query_name = student_name
    marks = student_marks.get(query_name)
    total = float()
    
    for eachScore in marks:
        total += eachScore
    print((total/len(marks)))
    
    finalScore = total/len(marks)
    print('{0:.2f}'.format(finalScore))

total_students = 2
student_list = ['Anony 25 26.5 28', 'Persona 26 28 30']

calculate_percentage(total_students, student_list, 'Anony')
