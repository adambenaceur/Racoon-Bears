import json
import os

def merge_json_files(directory, output_file):
    merged_data = []
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            with open(os.path.join(directory, filename)) as file:
                data = json.load(file)
                merged_data.append(data)
    with open(output_file, 'w') as outfile:
        json.dump(merged_data, outfile)

directory = os.getcwd()
output_file = os.path.join(directory, 'output.json')
merge_json_files(directory, output_file)
