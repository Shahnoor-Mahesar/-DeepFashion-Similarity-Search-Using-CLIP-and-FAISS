from transformers import CLIPModel, CLIPProcessor
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32").to(device)
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

def compute_embedding(image):
    """Compute CLIP embedding for an image."""
    inputs = processor(images=image, return_tensors="pt", do_resize=True, size=224)
    with torch.no_grad():
        image_features = model.get_image_features(inputs.pixel_values.to(device))
    return torch.nn.functional.normalize(image_features, p=2, dim=-1).cpu().numpy()
