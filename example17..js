guests = ["Galileo Galilei", "Albert Einstein", "Niels Bohr", "Marie Curie", "Isaac Newton", "Erwin Schrödinger"]

# Print a message saying that only two people can be invited for dinner.
print("Unfortunately, my new dinner table won't arrive in time, so I can only invite two people for dinner.")

# Remove guests from the list until only two names remain.
while len(guests) > 2:
    # Pop the last element from the list.
    guest = guests.pop()
    # Print a message to the guest letting them know they can't be invited to dinner.
    print("I'm sorry, {}. I can't invite you to dinner.".format(guest))

# Print a message to the two guests still on the list, letting them know they are still invited.
for guest in guests:
    print("Dear {}, I would like to confirm that you are still invited to dinner.".format(guest))

# Remove the last two names from the list.
guests.pop()
guests.pop()

# Print the list to make sure it's empty.
print(guests)

