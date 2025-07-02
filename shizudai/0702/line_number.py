input_path = './designers.txt'
output_path = './designers_numbered.txt'

with open(input_path) as input, \
     open(output_path, mode='w')as output:
    for i, line in enumerate(input, start=1):
        numbered_line = f"{i}:{line}"
        output.write(numbered_line)