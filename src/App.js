import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import Preview from './components/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import { selectUser, login } from './features/appSlice';
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
						photoUrl: user.photoURL,
					})
				);
			} else {
				// user is signed out
			}
		});
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				{!user ? (
					<Login />
				) : (
					<div className="app__body">
						<Routes>
							<Route exact path="/chats/view" element={<ChatView />} />
							<Route exact path="/chats" element={<Chats />} />
							<Route path="/preview" element={<Preview />} />
							<Route exact path="/" element={<WebcamCapture />} />
						</Routes>
					</div>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
