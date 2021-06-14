import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Functions';

import reducer, { initialState } from "./Redux/Reducer";
import { StateProvider } from "./Redux/StateProvider";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
