from PIL import Image, ImageFilter

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path).convert('RGBA')
    width, height = img.size
    pixels = img.load()
    
    mask = Image.new('L', (width, height), 255)
    mask_pixels = mask.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Max RGB value determines how 'non-black' it is
            lightness = max(r, g, b)
            
            # Very tight threshold for solid black
            if lightness < 4:
                mask_pixels[x, y] = 0
            elif lightness < 30:
                # Soft transition
                alpha = int(((lightness - 4) / 26.0) * 255)
                mask_pixels[x, y] = alpha
            else:
                mask_pixels[x, y] = 255
                
    # Smooth the mask to avoid jagged edges
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    
    # Un-premultiply colors in semi-transparent areas to avoid dark halos
    # Actually, saving directly with alpha is safer on standard web renders
    
    img.putalpha(mask)
    img.save(output_path, 'PNG')

if __name__ == "__main__":
    try:
        print("Processing left lily...")
        remove_black_bg('assets/lily_left.png', 'assets/lily_left_transparent.png')
        print("Processing right lily...")
        remove_black_bg('assets/lily_right.png', 'assets/lily_right_transparent.png')
        print("Files processed successfully.")
    except Exception as e:
        print(f"Error: {e}")
