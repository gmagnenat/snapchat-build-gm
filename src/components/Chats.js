import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {
	onSnapshot,
	collection,
	db,
	orderBy,
	query,
	serverTimestamp,
} from '../firebase';
import Chat from '../components/Chat';

import './Chats.css';

function Chats() {
	const [posts, setPosts] = useState([]);
	const collectionRef = collection(db, 'posts');
	const q = query(collectionRef, orderBy('timestamp', 'desc'));

	useEffect(() => {
		onSnapshot(q, (snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="chats">
			<div className="chats__header">
				<Avatar className="chats__avatar" />
				<div className="chats__search">
					<SearchIcon />
					<input placeholder="Friends" type="text" />
				</div>
				<ChatBubbleIcon className="chats__chatIcon" />
			</div>
			<div className="chats__posts">
				{posts.map(
					({
						id,
						data: { profilePic, username, timestamp, imageUrl, read },
					}) => (
						<Chat
							key={id}
							id={id}
							username={username}
							timestamp={timestamp}
							imageUrl={imageUrl}
							read={read}
							profilePic={profilePic}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Chats;
