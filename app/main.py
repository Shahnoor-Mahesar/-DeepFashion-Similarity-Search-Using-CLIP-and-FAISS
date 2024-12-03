from fastapi import FastAPI
from app.routes import product, embeddings

app = FastAPI()

# Include routers
app.include_router(product.router, prefix="/products", tags=["Products"])
app.include_router(embeddings.router, prefix="/embeddings", tags=["Embeddings"])
