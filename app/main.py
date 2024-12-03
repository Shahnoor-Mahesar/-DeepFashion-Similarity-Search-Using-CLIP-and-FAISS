from fastapi import FastAPI
from app.routes import product, embeddings
import os

app = FastAPI()
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'
# Include routers
app.include_router(product.router, prefix="/products", tags=["Products"])
app.include_router(embeddings.router, prefix="/embeddings", tags=["Embeddings"])

