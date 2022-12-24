favorite_number = 42

message = "My favorite number is {}.".format(favorite_number)

print(message)

//  My favorite number is 42.

message = "My favorite number is " + str(favorite_number) + "."
print(message)

message = f"My favorite number is {favorite_number}."
print(message)
