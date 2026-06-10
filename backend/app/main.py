from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os

from app.detectors.image.detector import detect_fake
from app.detectors.video.detector import extract_frames
from app.detectors.audio.detector import detect_audio


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


os.makedirs(
    "uploads",
    exist_ok=True
)


@app.get("/")
def home():

    return {
        "message": "Deepfake Detector Running"
    }


@app.post("/upload")
async def upload_image(
    file: UploadFile = File(...)
):

    file_path = f"uploads/{file.filename}"

    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )


    # VIDEO

    if file.filename.lower().endswith(
        (
            ".mp4",
            ".mov",
            ".avi"
        )
    ):

        result = extract_frames(
            file_path
        )

        return {
            "prediction": "Video Processed",
            "confidence": 95,
            "frames": result["frames"]
        }


    # AUDIO

    if file.filename.lower().endswith(
        (
            ".mp3",
            ".wav",
            ".m4a"
        )
    ):

        result = detect_audio(
            file_path
        )

        return {
            "prediction": result["prediction"],
            "confidence": result["confidence"]
        }


    # IMAGE

    result = detect_fake(
        file_path
    )

    return {
        "prediction": result["prediction"],
        "confidence": result["confidence"]
    }