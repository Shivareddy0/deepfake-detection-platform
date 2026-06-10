import cv2
import os


def extract_frames(video_path):

    folder = "uploads/video_frames"

    os.makedirs(
        folder,
        exist_ok=True
    )

    video = cv2.VideoCapture(
        video_path
    )

    count = 0


    while True:

        success, frame = video.read()

        if not success:
            break


        if count % 30 == 0:

            cv2.imwrite(

                f"{folder}/frame_{count}.jpg",

                frame

            )


        count += 1


    video.release()


    return {

        "frames": count // 30

    }