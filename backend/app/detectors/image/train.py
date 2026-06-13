import torch
import torch.nn as nn
import torch.optim as optim

from torchvision import datasets
from torchvision import transforms
from torchvision import models

from torch.utils.data import DataLoader


transform = transforms.Compose([

    transforms.Resize((224,224)),

    transforms.RandomHorizontalFlip(),

    transforms.ColorJitter(
        brightness=0.2
    ),

    transforms.ToTensor(),

    transforms.Normalize(
        mean=[0.485,0.456,0.406],
        std=[0.229,0.224,0.225]
    )

])


train_data = datasets.ImageFolder(

"app/detectors/image/dataset/train",

transform=transform

)
print(train_data.class_to_idx)

test_data = datasets.ImageFolder(

"app/detectors/image/dataset/test",

transform=transform

)


train_loader = DataLoader(

train_data,

batch_size=32,

shuffle=True

)

test_loader = DataLoader(

test_data,

batch_size=32

)



model = models.efficientnet_b0(

weights="DEFAULT"

)


model.classifier = nn.Sequential(

nn.Dropout(
0.5
),

nn.Linear(
1280,
256
),

nn.ReLU(),

nn.Dropout(
0.3
),

nn.Linear(
256,
2
)

)



device = (

"cuda"

if

torch.cuda.is_available()

else

"cpu"

)

model.to(device)



loss_fn = nn.CrossEntropyLoss()

optimizer = optim.Adam(

model.parameters(),

lr=0.00005,

weight_decay=0.001

)



for epoch in range(6):


    model.train()

    correct = 0

    total = 0


    for images,labels in train_loader:


        images = images.to(device)

        labels = labels.to(device)


        output = model(

            images

        )


        loss = loss_fn(

            output,

            labels

        )


        optimizer.zero_grad()

        loss.backward()

        optimizer.step()


        predicted = output.argmax(1)


        correct += (

            predicted==labels

        ).sum().item()


        total += labels.size(0)



    print(

        f"Epoch {epoch+1}"

    )



    print(

        f"Accuracy {(correct/total)*100:.2f}%"

    )



torch.save(

model.state_dict(),

"app/detectors/image/image_model.pth"

)


print(

"Model Saved"

)