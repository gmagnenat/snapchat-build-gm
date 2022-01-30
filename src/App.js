import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import Preview from './components/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import { selectUser, login, logout } from './features/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login';
import { onAuthStateChanged, auth } from './firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// user is signed in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						profilePic: user.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				{!user ? (
					<Login />
				) : (
					<>
						<img
							className="app__logo"
							src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png"
							alt=""
						/>
						<div className="app__body">
							<div className="app__bodyBackground">
								<Routes>
									<Route exact path="/chats/view" element={<ChatView />} />
									<Route exact path="/chats" element={<Chats />} />
									<Route path="/preview" element={<Preview />} />
									<Route exact path="/" element={<WebcamCapture />} />
								</Routes>
							</div>
						</div>
					</>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
