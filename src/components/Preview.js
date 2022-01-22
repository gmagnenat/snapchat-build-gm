import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCameraImage, resetCameraImage } from '../features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './Preview.css';

function Preview() {
	const cameraImage = useSelector(selectCameraImage);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!cameraImage) {
			navigate('/');
		}
	}, [cameraImage, navigate]);

	const closePreview = () => {
		dispatch(resetCameraImage());
	};

	return (
		<div className="preview">
			<CloseIcon onClick={closePreview} className="preview__close" />
			<img src={cameraImage} alt="" />
		</div>
	);
}

export default Preview;
