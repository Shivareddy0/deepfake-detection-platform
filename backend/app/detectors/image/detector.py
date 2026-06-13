from transformers import pipeline
from PIL import Image
import os

MODEL = pipeline(
    "image-classification",
    model="dima806/deepfake_vs_real_image_detection"
)


def detect_fake(image_path):

    image = Image.open(
        image_path
    ).convert("RGB")

    result = MODEL(image)

    top = result[0]

    label = top["label"]

    score = round(
        top["score"] * 100,
        2
    )

    if label.lower() in [
        "fake",
        "ai"
    ]:
        prediction = "Fake"

    else:
        prediction = "Real"

    return {

        "prediction": prediction,

        "confidence": score,

        "time": 0.5

    }