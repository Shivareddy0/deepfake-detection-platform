import cv2
import numpy as np


def detect_fake(image_path):

    image = cv2.imread(image_path)

    brightness = np.mean(image)

    if brightness > 120:
        label = "Real"
        confidence = 78
    else:
        label = "Fake"
        confidence = 82

    return {
        "prediction": label,
        "confidence": confidence
    }