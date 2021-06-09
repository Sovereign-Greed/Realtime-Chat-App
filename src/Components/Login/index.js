import React from 'react';
import { LoginStyles } from './Styles'

import { Button } from '@material-ui/core';
// import { useStateValue } from "../../Redux/StateProvider";
// import { auth, provider } from '../../Redux/Firebase';
// import { actionTypes } from '../../Redux/Reducer'
import { useStateValue } from '../../StateProvider';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';

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
					src="https://i.pinimg.com/originals/e9/ae/30/e9ae3039f070dca71c81ecd3ddb74156.png" 
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