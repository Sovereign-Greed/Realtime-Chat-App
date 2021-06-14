import React from 'react';
import { LoginStyles } from './Styles'

import { Button } from '@material-ui/core';
import { useStateValue } from '../../Redux/StateProvider';
import { auth, provider } from '../../Redux/firebase';
import { actionTypes } from '../../Redux/Reducer';

export function Login() {
	const [{}, dispatch] = useStateValue();
	const classes = LoginStyles();
	
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
		<div className={classes.login}>
			<div className={classes.loginContainer}>
				<img 
					className={classes.loginLogo}
					src="chatter-logo.png" 
					alt="chatter-logo"
				/>
				
				<div className="login__text">
					<h1>Sign In to Chatter</h1>
				</div>
				
				<Button className={classes.loginButton} onClick={signIn}>
					Sign In With Google
				</Button>
			</div>
		</div>
	)
}