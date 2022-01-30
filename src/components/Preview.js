import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCameraImage, resetCameraImage } from '../features/cameraSlice';
import { selectUser } from '../features/appSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';
import { ref } from '@firebase/storage';
import {
	db,
	storage,
	serverTimestamp,
	uploadString,
	collection,
	addDoc,
} from '../firebase';
import './Preview.css';
import { getDownloadURL } from 'firebase/storage';

function Preview() {
	const user = useSelector(selectUser);
	const cameraImage = useSelector(selectCameraImage);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const collectionRef = collection(db, 'posts');

	useEffect(() => {
		if (!cameraImage) {
			navigate('/');
		}
	}, [cameraImage, navigate]);

	const closePreview = () => {
		dispatch(resetCameraImage());
	};

	const sendPost = (e) => {
		e.preventDefault();
		uploadFiles(cameraImage);
	};

	const uploadFiles = (file) => {
		if (!file) return;
		const id = uuid();
		const storageRef = ref(storage, `/posts/${id}`);
		uploadString(storageRef, file, 'data_url').then((snapshot) => {
			// add a document in the firestore database
			getDownloadURL(snapshot.ref).then((url) => {
				addDoc(collectionRef, {
					imageUrl: url,
					username: user.displayName,
					profilePic: '',
					read: false,
					profilePic: user.profilePic,
					timestamp: serverTimestamp(),
				});
				navigate('/chats');
			});
		});
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
			<div onClick={sendPost} className="preview__footer">
				<h2>Send Now</h2>
				<SendIcon fontSize="small" className="preview__sendIcon" />
			</div>
		</div>
	);
}

export default Preview;
