import cv2
import numpy as np
import joblib

model = joblib.load("models/deepfake_model.pkl")


def detect_fake(image_path):

    image = cv2.imread(image_path)

    image = cv2.resize(image, (100, 100))

    image = image.flatten()

    image = np.array([image])

    prediction = model.predict(image)[0]

    if prediction == 0:
        label = "Real"
        confidence = 88

    else:
        label = "Fake"
        confidence = 92

    return {
        "prediction": label,
        "confidence": confidence
    }