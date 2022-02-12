import React, {useState} from 'react';
import './videocapture.css';
import {Form} from "react-bootstrap";

const VideoCapture = ({inputChange}) => {
    const [playing, setPlaying] = useState(false);

    const takeScreenshot = (event) => {
        event.preventDefault();

        let canvas = document.querySelector("#canvas");
        canvas.getContext('2d').drawImage(
            document.getElementsByClassName('app__videoFeed')[0],
            0,
            0,
            canvas.width,
            canvas.height
        );

        let image_data_url = canvas.toDataURL('image/jpeg');

        inputChange(image_data_url)
    }

    const startVideo = (event) => {
        event.preventDefault();

        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };

    const stopVideo = (event) => {
        event.preventDefault();

        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    return (
        <div className="app">
            <div className="app__container">
                <video
                    muted
                    autoPlay
                    className="app__videoFeed"
                />
            </div>
            <Form.Text className="text-muted text">
                Capture sua foto de cadastro
            </Form.Text>
            <canvas id="canvas"/>
            <div className="button-block">
                <div className="app__input">
                    {playing ? (
                        <button className="button-video" onClick={stopVideo}>stop</button>
                    ) : (
                        <button className="button-video" onClick={startVideo}>start</button>
                    )}
                </div>
                <button name="cFoto" className="button-video" onClick={takeScreenshot}>take</button>
            </div>
        </div>
    );
}

export default VideoCapture;