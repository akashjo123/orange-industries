import os

def replace_in_dir(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith((".tsx", ".ts")):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    content = f.read()
                
                # Check if it has text-brand-orange
                if "text-brand-orange" in content:
                    # Replace only exact matches (avoiding hover:text-brand-orange? No, hover:text-brand-orange-text is fine)
                    # Let's just replace all "text-brand-orange" with "text-brand-orange-text"
                    # But wait, what if it's already "text-brand-orange-text"?
                    # We can do a safe replace.
                    content = content.replace("text-brand-orange-text", "text-brand-orange") # reset first to avoid double
                    content = content.replace("text-brand-orange", "text-brand-orange-text")
                    
                    with open(path, "w") as f:
                        f.write(content)
                    print(f"Updated {path}")

replace_in_dir("app")
replace_in_dir("components")
print("Done")
