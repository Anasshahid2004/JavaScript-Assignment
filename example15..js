guests = ["Albert Einstein", "Marie Curie", "Stephen Hawking"]

# Print a message about the guest who can't make it.
print("Unfortunately, Stephen Hawking can't make it to the dinner.")

# Replace the name of the guest who can't make it with the name of a new guest.
guests[2] = "Isaac Newton"

# Print a second set of invitation messages.
for guest in guests:
    message = "Dear {}, I would like to invite you to dinner.".format(guest)
    print(message)

//     Unfortunately, Stephen Hawking can't make it to the dinner.
// Dear Albert Einstein, I would like to invite you to dinner.
// Dear Marie Curie, I would like to invite you to dinner.
// Dear Isaac Newton, I would like to invite you to dinner.
