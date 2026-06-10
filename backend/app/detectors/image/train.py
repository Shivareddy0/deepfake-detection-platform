import os
import cv2
import joblib
import numpy as np

from sklearn.svm import SVC


real_path = "dataset/real"
fake_path = "dataset/fake"

X = []
y = []


def process(folder, label):

    for img_name in os.listdir(folder):

        img_path = os.path.join(folder, img_name)

        img = cv2.imread(img_path)

        if img is None:
            continue

        img = cv2.resize(img, (100, 100))

        img = img.flatten()

        X.append(img)

        y.append(label)


process(real_path, 0)
process(fake_path, 1)

X = np.array(X)

model = SVC()

model.fit(X, y)

joblib.dump(model, "models/deepfake_model.pkl")

print("Training Completed")
print("Images:", len(X))