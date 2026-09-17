import os

def replace_in_dir(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith((".tsx", ".ts", ".js", ".json")):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    content = f.read()
                
                new_content = content.replace("projects@orangeindustries.me", "contact@orangeindustries.me")
                
                if new_content != content:
                    with open(path, "w") as f:
                        f.write(new_content)
                    print(f"Updated email in {path}")

replace_in_dir("app")
replace_in_dir("components")
replace_in_dir("data")
print("Done updating email.")
