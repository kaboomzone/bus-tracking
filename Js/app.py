import json
 

def write_json(new_data, filename='C:\\Users\\PRASAD\\Desktop\\hackathopia\\test\\Js\\count.json'):
    with open(filename,'r+') as file:
        file_data = json.load(file)
        file_data["count"] = new_data
        file.seek(0)
        json.dump(file_data, file, indent = 4)

y = input()
write_json(y)