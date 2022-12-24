# Create a list of current usernames.
current_users = ['Eric', 'Sarah', 'Josh', 'Katie', 'John']

# Create a list of new usernames.
new_users = ['Eric', 'Sarah', 'Julia', 'Sam', 'JOHN']

# Loop through the new usernames.
for new_user in new_users:
  # Check if the new username is already in the current usernames list.
  if new_user.lower() in [user.lower() for user in current_users]:
    # Print a message if the username is already in use.
    print(f"{new_user} is already in use. Please enter a new username.")
  else:
    # Print a message if the username is available.
    print(f"{new_user} is available.")

//     Eric is already in use. Please enter a new username.
// Sarah is already in use. Please enter a new username.
// Julia is available.
// Sam is available.
// JOHN is already in use. Please enter a new username.
