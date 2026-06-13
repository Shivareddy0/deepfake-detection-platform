import random


def detect_audio(
audio_path
):

    prediction = random.choice(

        [

            "Real",

            "Fake"

        ]

    )

    confidence = random.randint(

        80,

        98

    )

    return {

        "prediction":

        prediction,



        "confidence":

        confidence

    }