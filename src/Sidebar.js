import React, { useState } from 'react'
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import axios from './axios';

// material ui icons
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVert from "@material-ui/icons/MoreVert";

// material ui components
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Sidebar({ rooms, updateCurrentRoom, }) {
	
	const [input, setInput] = useState('');
	const [{ user }] = useStateValue();
	
	const createNewChat = async (e) => {
		e.preventDefault();
		
		await axios.post('/rooms/new', {
			roomName: input,
		})
		
		setInput('');
	}
	
	const sendRoomID = (id) => {
		updateCurrentRoom(id);
	}
	
	return (
		<div className="sidebar">
			
			<div className="sidebar__header">
				<Avatar src={user?.photoURL}/>
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				
				</div>
			</div>
			
			<div className="sidebar__search">
				<form>
					<input 
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder="Create Chatroom: Enter Name"
						type="text"
						/>
					<button onClick={createNewChat} type="submit">
						Create Chat
					</button>
				</form>
			</div>
			
			<div className='sidebar__chats'>
				{
					rooms.map((room, index) => (
						<SidebarChat 
							roomName={room.roomName} 
							lastTimestamp={room.lastTimestamp}
							roomID={room._id}
							key={index}
							sendRoomID={sendRoomID}
							/>
					))
				}
			</div>
		</div>	
	)
}

export default Sidebar;