from PIL import Image

def process_logo():
    raw_path = "/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded/media_1789626511338.png"
    img = Image.open(raw_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # 1. Flood fill from corners to remove white background
    visited = set()
    to_visit = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    while to_visit:
        x, y = to_visit.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        r, g, b, a = data[x, y]
        # if white-ish
        if r > 230 and g > 230 and b > 230:
            data[x, y] = (0, 0, 0, 0)
            if x > 0: to_visit.append((x-1, y))
            if x < width-1: to_visit.append((x+1, y))
            if y > 0: to_visit.append((x, y-1))
            if y < height-1: to_visit.append((x, y+1))
            
    # 2. Find bounding box of orange pixels
    min_x, min_y, max_x, max_y = width, height, 0, 0
    for x in range(width):
        for y in range(height):
            r, g, b, a = data[x,y]
            if a > 0 and (r > 200 and g < 150 and b < 50): # orange pixels
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
                
    # 3. Crop to the bounding box
    if max_x >= min_x and max_y >= min_y:
        img_cropped = img.crop((min_x, min_y, max_x+1, max_y+1))
        # 4. Resize to 120x120
        img_cropped = img_cropped.resize((120, 120), Image.LANCZOS)
        img_cropped.save("public/logo_1.png")
        print("Success processing logo")
    else:
        print("Could not find orange circle!")

process_logo()
