from fastapi import APIRouter, File, UploadFile, HTTPException
from app.utils.faiss_utils import find_similar
from app.utils.image_utils import process_image

router = APIRouter()

@router.post("/find-similar")
def find_similar_images(file: UploadFile = File(...), top_k: int = 5):
    """Find similar products to a given image."""
    try:
        image = process_image(file)
        similar_products = find_similar(image, top_k)
        return {"similar_products": similar_products}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
