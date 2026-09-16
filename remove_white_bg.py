from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # White background threshold
    for item in datas:
        # Check if pixel is close to white
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0)) # Fully transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg('assets/ganesha.png', 'assets/ganesha.png')
    print("White background removed from ganesha")
