import React from 'react';
import { SideBarChatsStyles } from './Styles';
import { changeDate, chatroomIcons } from '../../../../Functions'

import { Avatar } from "@material-ui/core";

// local component to render a side panel
function SidePanel({ roomName, roomIcon, lastTimestamp, roomID, sendRoomID }) {
    const classes = SideBarChatsStyles();
	return (
		<div className={classes.sidePanel} onClick={() => sendRoomID(roomID)}>
            <Avatar>
                {roomIcon ? chatroomIcons[roomIcon] : chatroomIcons.Camera}
            </Avatar>
            <h2 className={classes.sidePanelMobileName}>{roomName}</h2>
			<div className={classes.sidePanelInfo}>
				<h2 className={classes.sidePanelName}>{roomName}</h2>
				{lastTimestamp && <p>{changeDate(lastTimestamp.slice(0,25))}</p>}
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
