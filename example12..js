names = ["Alice", "Bob", "Charlie"]

for name in names:
    message = "Hello, {}! How are you doing?".format(name)
    print(message)

//     Hello, Alice! How are you doing?
// Hello, Bob! How are you doing?
// Hello, Charlie! How are you doing?

for name in names:
    message = "Hello, " + name + "! How are you doing?"
    print(message)

for name in names:
    message = f"Hello, {name}! How are you doing?"
    print(message)
    