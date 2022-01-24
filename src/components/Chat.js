import React from 'react';
import './Chat.css';
import { Avatar } from '@mui/material';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import ReactTimeago from 'react-timeago';
import { selectImage } from '../features/appSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db, updateDoc, doc } from '../firebase';

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const open = () => {
		const docRef = doc(db, 'posts', id);
		updateDoc(docRef, {
			read: true,
		});
	};
	return (
		<div onClick={open} className="chat">
			<Avatar className="chat__avatar" src={profilePic} />
			<div className="chat__info">
				<h4>{username}</h4>
				<p>
					Tap to view -{' '}
					<ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
				</p>
			</div>

			{!read && <StopRoundedIcon className="chat_readIcon" />}
		</div>
	);
}

export default Chat;
