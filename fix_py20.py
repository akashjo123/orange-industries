import os

def replace_in_dir(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    content = f.read()
                
                # Replace py-20 with py-12 (48px top/bottom padding)
                new_content = content.replace("py-20", "py-12")
                
                if new_content != content:
                    with open(path, "w") as f:
                        f.write(new_content)
                    print(f"Updated py-20 in {path}")

replace_in_dir("app")
replace_in_dir("components")
print("Done py-20 fix.")
