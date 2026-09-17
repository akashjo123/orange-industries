import os

def replace_in_dir(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    content = f.read()
                
                new_content = content.replace("py-24", "py-16")
                new_content = new_content.replace("pt-32", "pt-24")
                new_content = new_content.replace("pb-24", "pb-16")
                new_content = new_content.replace("mb-24", "mb-16")
                new_content = new_content.replace("mt-24", "mt-16")
                
                if new_content != content:
                    with open(path, "w") as f:
                        f.write(new_content)
                    print(f"Updated padding in {path}")

replace_in_dir("app")
replace_in_dir("components")
print("Done padding fix.")
