guests = ["Albert Einstein", "Marie Curie", "Isaac Newton"]

# Print a message about finding a bigger dinner table.
print("I just found a bigger dinner table, so I can invite more guests!")

# Add one new guest to the beginning of the list.
guests.insert(0, "Galileo Galilei")

# Add one new guest to the middle of the list.
guests.insert(2, "Niels Bohr")

# Add one new guest to the end of the list.
guests.append("Erwin Schrödinger")

# Print a new set of invitation messages.
for guest in guests:
    message = "Dear {}, I would like to invite you to dinner.".format(guest)
    print(message)

//     I just found a bigger dinner table, so I can invite more guests!
// Dear Galileo Galilei, I would like to invite you to dinner.
// Dear Albert Einstein, I would like to invite you to dinner.
// Dear Niels Bohr, I would like to invite you to dinner.
// Dear Marie Curie, I would like to invite you to dinner.
// Dear Isaac Newton, I would.
