import React, { useCallback, useState, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import './WebcamCapture.css';
const videoConstraints = {
	width: 250,
	height: 400,
	facingMode: 'user',
};

function WebcamCapture() {
	const webcamRef = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const capture = useCallback(() => {
		// do the function once and save the output
		// run the function again only if the ref changes
		// when capture is executed again it will be faster
		const imageSrc = webcamRef.current.getScreenshot();
		dispatch(setCameraImage(imageSrc));
		navigate('/preview');
	}, [webcamRef]);

	return (
		<div className="webcamCapture">
			<Webcam
				audio={false}
				height={videoConstraints.height}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				width={videoConstraints.width}
				videoConstraints={videoConstraints}
			/>

			<RadioButtonUncheckedIcon
				className="webcamCapture__button"
				onClick={capture}
				fontSize="large"
			/>
		</div>
	);
}

export default WebcamCapture;
