import os
import re

replacements = [
    (r'Saudi Arabia', 'United Arab Emirates'),
    (r'SAUDI ARABIA', 'UNITED ARAB EMIRATES'),
    (r'saudi: "Saudi Arabia', 'uae: "United Arab Emirates'),
    (r'saudi', 'uae'), # mostly for the JSON key regionalModel.saudi
    (r'Saudi Project', 'UAE Project'),
    (r'Saudi project', 'UAE project'),
    (r'KINGDOM OF UNITED ARAB EMIRATES', 'UNITED ARAB EMIRATES'), # fix over-replacement
]

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            orig_content = content
            # Specific sequence of replacements
            # First, Saudi Arabia -> United Arab Emirates
            content = content.replace("Saudi Arabia", "United Arab Emirates")
            content = content.replace("SAUDI ARABIA", "UNITED ARAB EMIRATES")
            
            # Then fix "KINGDOM OF UNITED ARAB EMIRATES" to just "UNITED ARAB EMIRATES"
            content = content.replace("KINGDOM OF UNITED ARAB EMIRATES", "UNITED ARAB EMIRATES")
            
            # Then specific phrases
            content = content.replace("Saudi Project", "UAE Project")
            content = content.replace("Saudi project", "UAE project")
            
            # Then the json key
            content = content.replace("saudi:", "uae:")
            content = content.replace("regionalModel.saudi", "regionalModel.uae")
            
            if content != orig_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Updated {filepath}")
