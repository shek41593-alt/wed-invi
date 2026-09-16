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
            
            # Much more aggressive threshold
            if lightness < 25:
                mask_pixels[x, y] = 0
            elif lightness < 45:
                # Soft transition
                alpha = int(((lightness - 25) / 20.0) * 255)
                mask_pixels[x, y] = alpha
            else:
                mask_pixels[x, y] = 255
                
    # Smooth the mask to avoid jagged edges
    mask = mask.filter(ImageFilter.GaussianBlur(1.5))
    
    img.putalpha(mask)
    img.save(output_path, 'PNG')

if __name__ == "__main__":
    try:
        remove_black_bg('assets/lily_left.png', 'assets/lily_left_transparent.png')
        remove_black_bg('assets/lily_right.png', 'assets/lily_right_transparent.png')
        print("Files aggressively processed.")
    except Exception as e:
        print(f"Error: {e}")
