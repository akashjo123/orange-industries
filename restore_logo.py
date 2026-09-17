from PIL import Image
import os

# Let's check some recent small media files to see if one is the original logo
files_to_check = [
    "media_1789476506424.png",
    "media_1789538762541.png",
    "media_1789626062319.png",
    "media_1789626511338.png",
    "media_1789627697961.png"
]

for f in files_to_check:
    path = f"/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded/{f}"
    if os.path.exists(path):
        img = Image.open(path)
        print(f"{f}: {img.size}")

