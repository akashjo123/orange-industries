from PIL import Image

img = Image.open('public/logo_1.png')
# Crop to the exact bounds of the orange circle
# X: 14 to 113
# Y: 0 to 104
# We'll use (13, 0, 114, 105) just to be safe with anti-aliasing edges
img_cropped = img.crop((13, 0, 115, 105))

# Resize it to a perfect square to fix the aspect ratio slightly if needed, or just let it be.
# 102x105 is very close to square. We will resize to 120x120.
img_cropped = img_cropped.resize((120, 120), Image.LANCZOS)
img_cropped.save('public/logo_1.png')
print("Successfully fixed logo_1.png")
