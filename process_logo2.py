from PIL import Image

def remove_white_bg(path):
    img = Image.open(path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # We want to keep ONLY the orange circle and the white M inside it.
    # The outer white background needs to be transparent.
    # Since the logo is a circle, we can just mask it with a perfect circle!
    # Or, we can use flood fill from the edges.
    
    # Let's flood fill again from the edges, with a higher tolerance.
    to_visit = []
    for x in range(width):
        to_visit.append((x, 0))
        to_visit.append((x, height-1))
    for y in range(height):
        to_visit.append((0, y))
        to_visit.append((width-1, y))
        
    visited = set()
    
    while to_visit:
        x, y = to_visit.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        r, g, b, a = data[x, y]
        # if white or near-white background
        if r > 200 and g > 200 and b > 200:
            data[x, y] = (0, 0, 0, 0)
            if x > 0: to_visit.append((x-1, y))
            if x < width-1: to_visit.append((x+1, y))
            if y > 0: to_visit.append((x, y-1))
            if y < height-1: to_visit.append((x, y+1))

    # Also make sure we don't have any transparent padding around the logo.
    min_x, min_y, max_x, max_y = width, height, 0, 0
    for x in range(width):
        for y in range(height):
            if data[x,y][3] > 0:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
                
    if max_x >= min_x and max_y >= min_y:
        img = img.crop((min_x, min_y, max_x+1, max_y+1))
    
    img = img.resize((120, 120), Image.LANCZOS)
    img.save(path)
    print("Cleaned background.")

try:
    remove_white_bg("public/logo_1.png")
except Exception as e:
    print("Error:", e)
