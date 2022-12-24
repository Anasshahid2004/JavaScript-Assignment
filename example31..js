# Create a list of usernames.
usernames = []

# Check if the list of usernames is empty.
if not usernames:
  print("We need to find some users!")
else:
  # Loop through the list of usernames.
  for username in usernames:
    # Print a special greeting for the admin user.
    if username == 'admin':
      print("Hello admin, would you like to see a status report?")
    # Print a generic greeting for other users.
    else:
      print(f"Hello {username}, thank you for logging in again.")

    //   If the list of usernames is empty, this will output the following message:

        We need to find some users!
