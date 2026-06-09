from fastapi import FastAPI, UploadFile, File
import shutil
from app.detector import detect_fake

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

    result = detect_fake(file_path)

    return {
        "filename": file.filename,
        "prediction": result["prediction"],
        "confidence": result["confidence"]
    }