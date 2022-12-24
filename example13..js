transportation = ["motorcycle", "car", "bicycle"]

for mode in transportation:
    print("I would like to own a Honda {}.".format(mode))

//     I would like to own a Honda motorcycle.
// I would like to own a Honda car.
// I would like to own a Honda bicycle.

for mode in transportation:
    statement = "I would like to own a Honda " + mode + "."
    print(statement)

for mode in transportation:
    statement = f"I would like to own a Honda {mode}."
    print(statement)
