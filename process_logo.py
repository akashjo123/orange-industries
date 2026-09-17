from PIL import Image
import sys

try:
    img = Image.open("/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded/media_1789550580867.png")
    img = img.convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # We want to make the outer white background transparent.
    # Simple approach: flood fill from top-left (0,0)
    
    to_visit = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    visited = set()
    
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
            
    # Now find bounding box of non-transparent pixels
    min_x, min_y, max_x, max_y = width, height, 0, 0
    for x in range(width):
        for y in range(height):
            if data[x,y][3] > 0:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
                
    img_cropped = img.crop((min_x, min_y, max_x+1, max_y+1))
    # Resize to 120x120 for consistency
    img_cropped = img_cropped.resize((120, 120), Image.LANCZOS)
    img_cropped.save("public/new_logo.png")
    print("Success")
except Exception as e:
    print("Error:", e)
