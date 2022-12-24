# Create a list of numbers from 1 to 9.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Loop through the list of numbers.
for number in numbers:
  # Determine the ordinal ending for the number.
  if number == 1:
    ordinal = "st"
  elif number == 2:
    ordinal = "nd"
  elif number == 3:
    ordinal = "rd"
  else:
    ordinal = "th"

  # Print the number and its ordinal ending.
  print(f"{number}{ordinal}")

//   1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8th
// 9th
