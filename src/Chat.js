import React, { useEffect, useState } from 'react';
import { useStateValue } from "./StateProvider";
import './Chat.css';

// material ui icons
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from "@material-ui/icons/";
// material ui components
import { Avatar, IconButton,  } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({ messages, currentRoom }) {
	
	const [input, setInput] = useState('');
	const [{ user }] = useStateValue();
	const [seed, setSeed] = useState('');
	
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	
	const sendMessage = async (e) => {
		e.preventDefault();
		
		let current = new Date();
		let timestamp = current.toUTCString().slice(0,28);
		
		await axios.post(`/${currentRoom._id}/messages/new`, {
			message: input,
			name: user.displayName,
			timestamp: timestamp,
			received: true,
		}) 
		
		setInput('');
	}
	
	return (
		<div className="chat">
			
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
				
				<div className="chat__headerInfo">
					<h3>{currentRoom.roomName}</h3>
					<p>{currentRoom.lastTimestamp}</p>
				</div>
				
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			
			<div className="chat__body">
				{
					messages.map((message, index) => (
						<p className={`chat__message ${ message.name === user.displayName ? "chat__reciever" : "" }`} key={index * 2}>
							<span className="chat__name">{message.name}</span>
							{message.message}
							<span className="chat__timestamp">{message.timestamp}</span>
						</p>
					))
				}
			</div>
			
			<div className="chat__footer">
				<InsertEmoticon />
				
				<form>
					<input 
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="Type a message"
						type="text"
						/>
					<button onClick={sendMessage} type="submit">
						Send Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;