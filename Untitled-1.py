student_card = {"номер": "324", "фамилия": "Иванов"}
print("Добро пожаловать!", student_card)

answer = input("Личный кабинет: 1 - взять, 2 - вернуть, 3 - домой")
while answer != "3":
    if answer == "1":
        if 'долг' not in student_card:
            student_card["долг"] = input("Введите название:")
    elif answer == "2":
        try:
            del(student_card["долг"])
        except KeyError:
            continue
    print("Карточка читателя:", student_card)
    answer = input("Личный кабинет: 1 - взять, 2 - вернуть, 3 - домой")

print("Ждём вас:", student_card)