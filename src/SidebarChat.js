import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

import { Avatar } from "@material-ui/core";

function SidebarChat({ roomName, lastTimestamp, roomID, sendRoomID }) {
	const [seed, setSeed] = useState("");
	
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	
	return (
		<div className='sidebarChat' onClick={() => sendRoomID(roomID)}>
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
			<div className="sidebarChat__info">
				<h2>{roomName}</h2>
				<p>{lastTimestamp}</p>
			</div>
		</div>
	) 
}

export default SidebarChat;