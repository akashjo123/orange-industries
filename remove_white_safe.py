from PIL import Image

def remove_white(img_path):
    img = Image.open(img_path).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # We will do a flood fill from the 4 corners to find exterior white pixels
    visited = set()
    to_visit = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    while to_visit:
        x, y = to_visit.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        r, g, b, a = data[x, y]
        # if white or transparent
        if (r > 230 and g > 230 and b > 230) or a == 0:
            data[x, y] = (0, 0, 0, 0)
            if x > 0: to_visit.append((x-1, y))
            if x < width-1: to_visit.append((x+1, y))
            if y > 0: to_visit.append((x, y-1))
            if y < height-1: to_visit.append((x, y+1))
            
    # We also need to restore the M if it was deleted by my previous script!
    # Did my previous script delete it? Yes.
    # Oh no, I overwrote the original file! I need to re-download or recreate it!
    
