def make_shirt(size="large", message="I love JavaScript"):
  print("I am making a shirt with size " + size + " and message: '" + message + "'")

# Making a large shirt with the default message
make_shirt()

# Making a medium shirt with the default message
make_shirt("medium")

# Making a shirt with a different message
make_shirt(message="I love Python")

"I am making a shirt with size large and message: 'I love JavaScript'"
"I am making a shirt with size medium and message: 'I love JavaScript'"
"I am making a shirt with size large and message: 'I love Python'"