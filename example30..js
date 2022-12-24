# Create a list of usernames.
usernames = ['eric', 'sarah', 'admin', 'josh', 'katie']

# Loop through the list of usernames.
for username in usernames:
  # Print a special greeting for the admin user.
  if username == 'admin':
    print("Hello admin, would you like to see a status report?")
  # Print a generic greeting for other users.
  else:
    print(f"Hello {username}, thank you for logging in again.")

//     Hello eric, thank you for logging in again.
// Hello sarah, thank you for logging in again.
// Hello admin, would you like to see a status report?
// Hello josh, thank you for logging in again.
// Hello katie, thank you for logging in again.
