import React from 'react';
import { SideBarChatsStyles } from './Styles';

import { Avatar } from "@material-ui/core";

// local component to render a side panel
function SidePanel({ roomName, lastTimestamp, roomID, sendRoomID }) {
    const randNum = () => (Math.floor(Math.random() * 5000))
    const classes = SideBarChatsStyles();
	return (
		<div className={classes.sidePanel} onClick={() => sendRoomID(roomID)}>
			<Avatar src={`https://avatars.dicebear.com/api/human/${randNum()}.svg`}/>
			<div className={classes.sidePanelInfo}>
				<h2 className={classes.sidePanelName}>{roomName}</h2>
				<p>{lastTimestamp}</p>
			</div>
		</div>
	) 
}

export function SideBarChats({ rooms, sendRoomID }) {
    const classes = SideBarChatsStyles();

    return (
        <div className={classes.chats}>
            {
                rooms.map((room, index) => (
                    <SidePanel 
                        roomName={room.roomName} 
                        lastTimestamp={room.lastTimestamp}
                        roomID={room._id}
                        key={index}
                        sendRoomID={sendRoomID}
                    />
                ))
            }
        </div>
    )
}
