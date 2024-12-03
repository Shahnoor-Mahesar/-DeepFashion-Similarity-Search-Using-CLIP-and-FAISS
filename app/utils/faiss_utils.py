import faiss
import numpy as np
import os
import pickle
import torch
import torch.nn.functional as F

# FAISS index initialization
embedding_dim = 512
faiss_index_path = "data/faiss_index.bin"
image_id_mapping_path = "data/image_id_mapping.pkl"  # Path to store image_id_mapping

index = faiss.IndexFlatL2(embedding_dim)
image_id_mapping = []



def load_faiss_index():
    """Load FAISS index and image_id_mapping from disk."""
    global index, image_id_mapping
    if os.path.exists(faiss_index_path):
        index = faiss.read_index(faiss_index_path)
    if os.path.exists(image_id_mapping_path):
        with open(image_id_mapping_path, "rb") as f:
            image_id_mapping = pickle.load(f)

def save_faiss_index(): 
    """Save FAISS index and image_id_mapping to disk."""
    faiss.write_index(index, faiss_index_path)
    with open(image_id_mapping_path, "wb") as f:
        pickle.dump(image_id_mapping, f)

def add_embedding(product_id, embedding):
    """Add a new embedding to FAISS."""
    index.add(embedding)
    image_id_mapping.append(product_id)
    print(image_id_mapping)
    save_faiss_index()

def update_embedding(product_id, embedding):
    """Update an existing embedding in FAISS."""
    if product_id not in image_id_mapping:
        raise ValueError("Product not found.")
    idx = image_id_mapping.index(product_id)
    index.remove_ids(np.array([idx]))
    image_id_mapping.remove(product_id)
    add_embedding(product_id, embedding)

def find_similar(query_embedding, top_k):
   # Ensure 2D array
   if query_embedding.ndim == 1:
       query_embedding = query_embedding.reshape(1, -1)
   
   # Normalize query embedding 
   query_embedding = F.normalize(torch.from_numpy(query_embedding), p=2, dim=-1).numpy()
   
   # Perform similarity search
   distances, indices = index.search(query_embedding, top_k)
   
   print(indices)
   # Map indices to product IDs
   similar_products = [image_id_mapping[idx] for idx in indices[0] if idx < len(image_id_mapping)]
   
   return similar_products


# Call load_faiss_index when the server starts to load the index and the id mapping
load_faiss_index()
