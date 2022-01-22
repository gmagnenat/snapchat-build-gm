import React from 'react';
import { useSelector } from 'react-redux';
import { selectCameraImage } from '../features/cameraSlice';
import './Preview.css';

function Preview() {
	const cameraImage = useSelector(selectCameraImage);

	console.log(cameraImage);
	return (
		<div className="preview">
			<h2>This is your preview</h2>
			<img src={cameraImage} alt="" />
		</div>
	);
}

export default Preview;
