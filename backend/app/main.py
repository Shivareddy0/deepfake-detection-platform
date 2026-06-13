from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"]
)

@app.get("/")
def home():

    return {

        "message":"Backend Running"

    }


@app.post("/upload")
async def upload(

file:UploadFile|None=File(None),

type:str=Form("image"),

url:str=Form("")

):

    if type=="url":

        return {

            "prediction":"URL ANALYZED",

            "confidence":88

        }

    if type=="webcam":

        return {

            "prediction":"LIVE DETECTED",

            "confidence":91

        }

    if file:

        return {

            "prediction":"FAKE",

            "confidence":92

        }

    return {

        "prediction":"NO INPUT",

        "confidence":0

    }