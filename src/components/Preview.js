import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCameraImage, resetCameraImage } from '../features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
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
			<div className="preview__toolbarRight">
				<TextFieldsIcon />
				<CreateIcon />
				<NoteIcon />
				<MusicNoteIcon />
				<AttachFileIcon />
				<CropIcon />
				<TimerIcon />
			</div>

			<img src={cameraImage} alt="" />
		</div>
	);
}

export default Preview;
