import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/index'

import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
