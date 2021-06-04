import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import './App.css';
import { useStateValue } from "./StateProvider";

// components
import { ChatBar, SideBar } from './Components'
import Login from './Login'
// import { Login } from './Components/Login';

function App() {
	const [{ user }] = useStateValue();

	const [messages, setMessages] = useState([]);
	const [rooms, setRooms] = useState([]);
	const [currentRoomID, setCurrentRoomID] = useState('5fc7c2c7624b361bc614ad83');
	const [currentRoom, setCurrentRoom] = useState([]);
	
	const updateCurrentRoom = (newID) => {
		setCurrentRoomID(newID)
		axios.get(`/${newID}/messages`)
		.then(response => {
			setCurrentRoom(response.data);
			setMessages(response.data.messages);
		})
	};
	
	// set currentRoom - sets up current room chat and messages (default is general chat)
	useEffect(() => {
		axios.get(`/${currentRoomID}/messages`)
		.then(response => {
			setCurrentRoom(response.data);
			setMessages(response.data.messages);
		})
	}, [currentRoomID]);
	
	// get all rooms - to populate side bar
	useEffect(() => {
		axios.get('/rooms/all')
		.then(response => {
			setRooms(response.data);
		})
	}, [])
	
	// watch messages for changes
	useEffect(() => {
		const pusher = new Pusher('7c2034f93b8e11aa6d08', {
			cluster: 'us2'
    	});
		
		const channel = pusher.subscribe('messages');
		channel.bind('inserted', (newMessage) => {
			// alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]);
		})
		
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		}
	}, [messages]);
	
	// watch rooms for changes   
	useEffect(() => {
		const pusher = new Pusher('7c2034f93b8e11aa6d08', {
			cluster: 'us2'
    	});
		
		const channel = pusher.subscribe('rooms');
		channel.bind('inserted', (newRoom) => {
			// set new room to currentRoomID
			setCurrentRoomID(newRoom.roomID);
			// adds new room to side bar
			setRooms([...rooms, newRoom]);
			// set currentRoom messages
			axios.get(`/${newRoom.roomID}/messages`)
			.then(response => {
				setCurrentRoom(response.data);
				setMessages(response.data.messages);
			})
		})
		
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		}
	}, [rooms])
	
		
	return (
		<div className="app">
			{ 
				!user ? (<Login />) : (
			<div class="app__body">
				<SideBar rooms={rooms} updateCurrentRoom={updateCurrentRoom}/>
				<ChatBar messages={messages} currentRoom={currentRoom}/>
			</div>
				)
			}	
		</div>
	);
}

export default App;