import os

path = r'c:\Users\C9 - Mayur\.antigravity\C9\C9 communications\src\app\enterprise\page.tsx'
with open(path, 'rb') as f:
    content = f.read()

# Replace the weird characters (likely UTF-8 representation of some separators)
# The output showed '"?"?"?' which is often a result of non-breaking spaces or decorative lines
# Let's try to replace common non-ascii characters with spaces or remove them
clean_content = content.replace(b'\xef\xbf\xbd', b'') # Replacement character 
clean_content = clean_content.replace(b'\xe2\x94\x81', b'=') # Box drawing characters
clean_content = clean_content.replace(b'\xe2\x94\x80', b'-')

with open(path, 'wb') as f:
    f.write(clean_content)

print("File cleaned.")
