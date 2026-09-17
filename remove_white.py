from PIL import Image

def remove_white(img_path):
    img = Image.open(img_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # We will just replace all white or near-white pixels with transparent
    for x in range(width):
        for y in range(height):
            r, g, b, a = data[x, y]
            if r > 240 and g > 240 and b > 240:
                data[x, y] = (0, 0, 0, 0)
                
    img.save(img_path)
    print("Removed white background")

remove_white('public/logo_1.png')
