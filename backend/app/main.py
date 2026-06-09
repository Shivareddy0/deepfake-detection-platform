from fastapi import FastAPI, UploadFile, File
import shutil
import cv2

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Deepfake Detector Running"
    }


@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    image = cv2.imread(file_path)

    height, width = image.shape[:2]

    return {
        "filename": file.filename,
        "height": height,
        "width": width,
        "status": "processed"
    }