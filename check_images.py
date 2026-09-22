from PIL import Image
import os

files_to_check = [f for f in os.listdir('/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded') if f.endswith('.png')]

for f in sorted(files_to_check):
    path = f"/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded/{f}"
    try:
        img = Image.open(path)
        print(f"{f}: {img.size}")
    except:
        pass
