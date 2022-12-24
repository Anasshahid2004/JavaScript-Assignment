places = ["Tokyo", "Paris", "New York", "Sydney", "Cairo"]

# Print the array in its original order.
print("Original order:", places)

# Print the array in alphabetical order without modifying the original list.
print("Alphabetical order:", sorted(places))

# Print the array in its original order to show it has not been modified.
print("Original order:", places)

# Print the array in reverse alphabetical order without changing the order of the original list.
print("Reverse alphabetical order:", sorted(places, reverse=True))

# Print the array in its original order to show it has not been modified.
print("Original order:", places)

# Reverse the order of the array.
places.reverse()

# Print the array to show its order has been changed.
print("Reversed:", places)

# Reverse the order of the array again.
places.reverse()

# Print the array to show it's back to its original order.
print("Original order:", places)

# Sort the array in alphabetical order.
places.sort()

# Print the array to show its order has been changed.
print("Alphabetical order:", places)

# Sort the array in reverse alphabetical order.
places.sort(reverse=True)

# Print the array to show its order has been changed.
print("Reverse alphabetical order:", places)

