import faiss
import numpy as np
import os
import pickle

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
    """Find similar embeddings in FAISS."""
    distances, indices = index.search(query_embedding, top_k)
    return [image_id_mapping[i] for i in indices[0]]

# Call load_faiss_index when the server starts to load the index and the id mapping
load_faiss_index()
