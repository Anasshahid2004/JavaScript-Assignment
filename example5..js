quote = "A person who never made a mistake never tried anything new."
author = "Albert Einstein"
famous_person = author
message = '{} once said, "{}"'.format(famous_person, quote)

print(message)

// Albert Einstein once said, "A person who never made a mistake never tried anything new."

message = famous_person + ' once said, "' + quote + '"'
print(message)
