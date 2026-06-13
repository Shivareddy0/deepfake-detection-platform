import torch
import torch.nn as nn

from torchvision import transforms
from torchvision import models

from PIL import Image

import os


device = "cuda" if torch.cuda.is_available() else "cpu"


transform = transforms.Compose([

    transforms.Resize((224,224)),

    transforms.ToTensor(),

    transforms.Normalize(

        mean=[0.485,0.456,0.406],

        std=[0.229,0.224,0.225]

    )

])


model = models.efficientnet_b0()


model.classifier = nn.Sequential(

    nn.Dropout(0.5),

    nn.Linear(
        1280,
        256
    ),

    nn.ReLU(),

    nn.Dropout(0.3),

    nn.Linear(
        256,
        2
    )

)


model.load_state_dict(

    torch.load(

        "app/detectors/image/image_model.pth",

        map_location=device

    )

)


model.to(device)

model.eval()


classes = [

    "fake",

    "real"

]


root = "app/detectors/image/dataset/test"


correct = 0

total = 0


for label in classes:

    folder = os.path.join(

        root,

        label

    )


    for file in os.listdir(folder):


        try:

            path = os.path.join(

                folder,

                file

            )


            image = Image.open(

                path

            ).convert(

                "RGB"

            )


            image = transform(

                image

            )


            image = image.unsqueeze(

                0

            ).to(

                device

            )


            with torch.no_grad():

                output = model(

                    image

                )


                pred = output.argmax(

                    1

                ).item()


            if classes[pred] == label:

                correct += 1


            total += 1


        except:

            pass


print(

f"\nTest Accuracy = {(correct/total)*100:.2f}%"

)