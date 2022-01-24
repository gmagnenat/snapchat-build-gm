import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { auth, googleProvider, signInWithPopup } from '../firebase';

function Login() {
	const dispatch = useDispatch();
	const signIn = () => {
		signInWithPopup(auth, googleProvider).catch((error) =>
			alert(error.message)
		);
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
