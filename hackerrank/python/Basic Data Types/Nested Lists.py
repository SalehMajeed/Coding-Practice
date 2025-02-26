def record(number_students, list_number) :
    record_list = []
    all_scores = set()
    for _ in range(number_students):
        name = list_number[_][0]
        score = list_number[_][1]
        all_scores.add(score)
        record_list.append([name, score])
        
    second_lowest = sorted(all_scores)[1]
    record_list.sort(key=lambda x: x[0])
        
    for student_details in record_list:
        if(student_details[1] == second_lowest):
            print(student_details[0]);
        
student_list = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]];
record(5, student_list) 