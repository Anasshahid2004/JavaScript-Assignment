guests = ["Albert Einstein", "Marie Curie", "Stephen Hawking"]

for guest in guests:
    message = "Dear {}, I would like to invite you to dinner.".format(guest)
    print(message)

//     Dear Albert Einstein, I would like to invite you to dinner.
// Dear Marie Curie, I would like to invite you to dinner.
// Dear Stephen Hawking, I would like to invite you to dinner.

for guest in guests:
    message = "Dear " + guest + ", I would like to invite you to dinner."
    print(message)

for guest in guests:
    message = f"Dear {guest}, I would like to invite you to dinner."
    print(message)
