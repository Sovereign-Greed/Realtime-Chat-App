import React from 'react';
import './Styles.css'

import { Button } from '@material-ui/core';
import { actionTypes, auth, provider, useStateValue } from "../../Redux";

export function Login() {
	const [user, dispatch] = useStateValue();
	
	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(result => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				})
			})
			.catch(error => alert(error.message));
	}
	
	return (
		<div className="login">
			<div className="login__container">
				<img src="https://i.pinimg.com/originals/e9/ae/30/e9ae3039f070dca71c81ecd3ddb74156.png" alt="chatter-logo"/>
				
				<div className="login__text">
					<h1>Sign In to Chatter</h1>
				</div>
				
				<Button  onClick={signIn}>
					Sign In With Google
				</Button>
			</div>
		</div>
	)
}