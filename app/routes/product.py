from fastapi import APIRouter, File, UploadFile, HTTPException
from app.utils.faiss_utils import add_embedding, update_embedding
from app.utils.image_utils import process_image
from app.utils.embedding_utils import compute_embedding

router = APIRouter()

@router.get("/test")
def add_product():
    return "Hello from API"


@router.post("/add")
def add_product(product_id: str, file: UploadFile = File(...)):
    """Add a new product to the FAISS index."""
    try:
        image = process_image(file)
        embedding=compute_embedding(image)
        add_embedding(product_id, embedding)
        return {"message": "Product added successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/update")
def update_product(product_id: str, file: UploadFile = File(...)):
    """Update an existing product's image and embedding."""
    try:
        image = process_image(file)
        embedding=compute_embedding(image)
        update_embedding(product_id, embedding)
        return {"message": "Product updated successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
