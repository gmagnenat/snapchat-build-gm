import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';
import { auth, googleProvider, signInWithPopup } from '../firebase';

function Login() {
	const dispatch = useDispatch();
	const signIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((userAuth) => {
				dispatch(
					login({
						username: userAuth.user.displayName,
						profilePic: userAuth.user.photoURL,
						id: userAuth.user.uid,
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png"
					alt=""
				/>
				<Button variant="outlined" onClick={signIn}>
					Sign in
				</Button>
			</div>
			{/* <form>
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />
			</form> */}
		</div>
	);
}

export default Login;
