from rembg import remove
from PIL import Image
from io import BytesIO

def process_image(file):
    """Process image: Remove background and return PIL Image."""
    image = Image.open(BytesIO(file.file.read())).convert("RGB")
    image_bytes = BytesIO()
    image.save(image_bytes, format="PNG")
    image_bytes.seek(0)
    bg_removed = remove(image_bytes.getvalue())
    return Image.open(BytesIO(bg_removed))
